import React from "react";
import { QueryClientProvider } from "react-query";
import Routes from "./src/routes";
import { queryClient } from "./src/services/query-client";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
