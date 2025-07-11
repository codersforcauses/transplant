import axios from "axios";
// import Cookies from "js-cookie";
import { createContext, useContext, useEffect } from "react";

import { useTokenStore } from "@/store/TokenStore";

type AuthContextType = {
  userId: string | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

type TokenResponse = {
  access: string;
  refresh: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const accessToken = useTokenStore((state) => state.access);
  const setTokens = useTokenStore((state) => state.setTokens);
  const clearTokens = useTokenStore((state) => state.clear);

  // id is generated automatically by DB.
  const userId =
    (accessToken?.decoded as { user_id?: string })?.user_id ?? null;
  const isLoggedIn = userId !== null;

  // Automatically set/remove a cookie when the access token changes
  // This is used by NextJS middleware to determine if the user is able to access certain routes
  // TODO: Currently role is always "PATICIPANT". Roles are here: server/event_registration/models.py.
  // TODO: no interaction with roles so far

  useEffect(() => {
    // if (accessToken) {
    //   Cookies.set("user_role", "user", { sameSite: "strict", secure: true });
    // } else {
    //   Cookies.remove("user_role");
    // }
  }, [accessToken]);

  // LOG IN

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post<TokenResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/token/`,
        { email, password },
        {
          validateStatus: (status) =>
            status === 200 || status === 401 || status === 400,
        },
      );

      if (result.status !== 200 || !result.data) {
        // Try to get error message from backend
        const data = result.data as any;
        const errorMsg = data?.detail || data?.error || "Invalid credentials";
        return errorMsg;
      }

      setTokens(result.data.access, result.data.refresh);
      return true;
    } catch (err: any) {
      // Network or unexpected error
      return err?.response?.data?.detail || err?.message || "Network error";
    }
  };

  // LOG OUT

  const logout = async () => {
    clearTokens();
  };
  const context = { userId, isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
