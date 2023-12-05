import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Response } from "@/interfaces/common";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response<User>>) {
  const { id } = req.query as { id: string };

  if (req.method === "PUT") {
    const { name, email, position } = req.body;
    try {
      const update = await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          position,
        },
      });
      return res.status(200).json({ message: "User item updated successfully.", data: update });
    } catch (error) {
      return res.status(500).json({ message: error as string, status: "error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "User item deleted successfully.", data: user });
    } catch (error) {
      return res.status(500).json({ message: error as string, status: "error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed", status: "fail" });
}
