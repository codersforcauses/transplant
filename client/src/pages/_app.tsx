import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { AuthProvider, useAuth } from "@/context/auth-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const queryClient = new QueryClient();

function AuthRedirect({ Component, pageProps, router }: AppProps) {
  const { isLoggedIn } = useAuth();
  // redirect logic
  useEffect(() => {
    const publicPages = ["/loginForAuthCheck", "/register"];
    if (!isLoggedIn && !publicPages.includes(router.pathname)) {
      // TODO: uncomment to redirect to main in not logged in
      // router.replace("/loginForAuthCheck");
    } else if (isLoggedIn && publicPages.includes(router.pathname)) {
      router.replace("/");
    }
  }, [isLoggedIn, router.pathname]);
  return <Component {...pageProps} />;
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className={dmSans.variable}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthRedirect
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
