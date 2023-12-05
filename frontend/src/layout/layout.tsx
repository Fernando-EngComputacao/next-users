import { Stack } from "@chakra-ui/react";
import { AppShell } from "@saas-ui/react";
import { Sidebar } from "@/components";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell sidebar={<Sidebar />} justifyContent="center" h="100vh">
      <Stack
        as="main"
        flex="1"
        py="2"
        px="4"
        margin={3}
        pt={["8", "8", "8", "8"]}
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
    </AppShell>
  );
}
