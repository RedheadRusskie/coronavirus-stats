import { FC } from "react";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "antd/dist/reset.css";

import { ThemeProvider } from "@/components/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/query-client";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
