import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";

import Layout from "@/components/Layout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={dmSans.variable}>
        <Layout>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  );
}
