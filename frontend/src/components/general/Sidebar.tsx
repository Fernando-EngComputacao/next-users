"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import { NavGroup, NavItem, Sidebar as UISidebar, SidebarSection } from "@saas-ui/react";
import { usePathname } from "next/navigation";
import { FiChevronsLeft, FiChevronsRight, FiHome, FiUsers } from "react-icons/fi";

export function Sidebar() {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });

  const path = usePathname();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (e: any) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <UISidebar
      toggleBreakpoint={false}
      variant={isOpen ? "default" : "compact"}
      transition="width"
      transitionDuration="normal"
      width={isOpen ? "fit-content" : "14"}
      minWidth="auto"
      height="100vh"
      onDrag={() => undefined}
      onDragEnd={() => undefined}
      onDragStart={() => undefined}
      onAnimationStart={() => undefined}
    >
      <SidebarSection justifyContent="space-between" height="100%">
        <Box>
          <NavGroup>
            <NavItem href="/" icon={<FiHome />} isActive={path === "/"}>
              Home
            </NavItem>
            <NavItem href="/users" icon={<FiUsers />} isActive={path === "/users"}>
              Users
            </NavItem>
          </NavGroup>
        </Box>
        <NavGroup>
          <NavItem
            flexDirection="row-reverse"
            onClick={(e) => handleToggle(e)}
            icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
          >
            {isOpen ? "Colapsar Menu" : "Ampliar Menu"}
          </NavItem>
        </NavGroup>
      </SidebarSection>
    </UISidebar>
  );
}
