"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalsProvider, SaasProvider } from "@saas-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          <SaasProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </SaasProvider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
