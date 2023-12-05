import { GetServerSideProps } from "next";
import { User } from "@prisma/client";
import prisma from "../../lib/prisma";

type UsersProps = {
  users: User[];
};

export default function AllUsers({ users }: UsersProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <p className="text-lg">{JSON.stringify(users, null, 2)}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  const data = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    position: user.position,
  }));

  return {
    props: {
      users: data,
    },
  };
};
