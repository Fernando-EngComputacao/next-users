import { getUsersQuery, putUsersQuery } from "@/client/queries";
import { useCustomQuery } from "@/hooks/use-custom-query";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { User } from "@prisma/client";
import { FormDialog, FormLayout, Persona, SearchInput } from "@saas-ui/react";
import { useState } from "react";

export default function Test() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const disclosure = useDisclosure();
  const { data: users } = useCustomQuery<User[]>({
    queryKey: ["id"],
    custom: getUsersQuery(),
  });

  const sendValue = (data) => {
    const user: User = {
      ...data,
    };
    putUsersQuery({ userId: user.id, userData: user }).queryFn();
    disclosure.onClose();
  };

  if (!users) return <Text>Loading...</Text>;

  return (
    <div>
      <Box display="flex">
        <SearchInput borderColor="#256315" />
        <Button>Search</Button>
      </Box>
      {users.map((user: User) => (
        <Box display="flex" flexDirection="column" flexWrap="wrap" overflow="auto">
          <Persona
            src={`https://avatars.githubusercontent.com/u/123${Math.floor(Math.random() * 1500) + 1150}?v=10`}
            name={user.name}
            secondaryLabel={user.email}
            isOutOfOffice
            onClick={() => {
              disclosure.onOpen();
              setSelectedUser(user);
            }}
            overflow="auto"
          />
          <FormDialog
            title="Edit User"
            defaultValues={{
              id: selectedUser?.id || "",
              name: selectedUser?.name || "",
              email: selectedUser?.email || "",
              position: selectedUser?.position || "",
              date_created: selectedUser?.date_created,
            }}
            {...disclosure}
            onSubmit={(event) => sendValue(event)}
          >
            {({ Field }) => (
              <FormLayout>
                <Field name="id" label="ID" type="password" autoFocus />
                <Field name="name" label="Name" type="text" autoFocus />
                <Field name="email" label="Email" type="email" autoFocus />
                <Field name="position" label="Position" type="text" autoFocus />
              </FormLayout>
            )}
          </FormDialog>
        </Box>
      ))}
    </div>
  );
}
