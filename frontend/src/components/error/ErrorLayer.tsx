"use client";

import { Button, Box } from "@chakra-ui/react";
import {
  EmptyStateContainer,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from "@saas-ui/react";
import { PiWarningCircleLight } from "react-icons/pi";
import { useAnimation } from "@codechem/chakra-ui-animations";
import { useRouter } from "next/navigation";

interface ErrorLayerProps {
  title: string;
  description: string;
}

export function ErrorLayer({ title, description }: ErrorLayerProps) {
  const animation = useAnimation("pulse", { duration: 2000, iterationCount: "infinite" });
  const history = useRouter();

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleBackClick = () => {
    history.back();
  };
  return (
    <Box p={4} display="flex" textAlign="center" alignItems="center" justifyContent="center">
      <EmptyStateContainer colorScheme="red">
        <EmptyStateBody>
          <EmptyStateIcon animation={animation} w={16} h={16}>
            <PiWarningCircleLight />
          </EmptyStateIcon>

          <EmptyStateTitle fontSize="2xl">{title}</EmptyStateTitle>
          <EmptyStateDescription fontSize="2xl">{description}</EmptyStateDescription>

          <EmptyStateActions>
            <Button colorScheme="gray" onClick={handleHomeClick}>
              Home
            </Button>
            <Button variant="ghost" onClick={handleBackClick}>
              Back
            </Button>
          </EmptyStateActions>
        </EmptyStateBody>
      </EmptyStateContainer>
    </Box>
  );
}
