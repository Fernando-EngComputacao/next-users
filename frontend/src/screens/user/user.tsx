import { Persona } from "@saas-ui/react";

export const User = ({ random, name, email }: { random: number; name: string; email: string }) => (
  <Persona
    src={`https://avatars.githubusercontent.com/u/123${random}?v=10`}
    name={name}
    secondaryLabel={email}
    isOutOfOffice
  />
);
