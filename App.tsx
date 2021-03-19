import React from "react";
import { QueryClientProvider } from "react-query";
import Routes from "./src/routes";
import { queryClient } from "./src/services/query-client";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Home />
    </QueryClientProvider>
  );
}
