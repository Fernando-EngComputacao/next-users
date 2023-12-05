import { User } from "@prisma/client";
import requests from "./requests";

const getUsers = () => requests.get<User[]>("/users");
const putUsers = ({ userId, userData }: { userId: string; userData: User }) => {
  requests.put<User>(`/users/${userId}`, { body: userData });
};

export { getUsers, putUsers };
