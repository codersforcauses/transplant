import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";

import { AuthProvider, useAuth } from "@/context/auth-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className={dmSans.variable}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
