import React from "react";
import { GlobalStyle, loadFonts } from "./src/styles/global";
import { QueryClientProvider } from "react-query";
import Routes from "./src/routes";
import { queryClient } from "./src/services/query-client";

export default function App() {
  loadFonts();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
