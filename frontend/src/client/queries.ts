import { User } from "@prisma/client";
import * as client from "./client";
import { HTTPResponse } from "./requests";

interface Query<T> {
  queryKey: () => readonly unknown[];
  queryFn: () => Promise<HTTPResponse<T>>;
}

const getUsersQuery = (): Query<User[]> => ({
  queryKey: () => ["users"],
  queryFn: () => client.getUsers(),
});

const putUsersQuery = ({ userId, userData }: { userId: string; userData: User }) => ({
  queryKey: () => ["putUsers"],
  queryFn: () => client.putUsers({ userId, userData }),
});

export { getUsersQuery, putUsersQuery };
