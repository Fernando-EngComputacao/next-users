import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Response } from "@/interfaces/common";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response<User | User[]>>) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json({ data: users, status: "success" });
    } catch (error: unknown) {
      return res.status(500).json({ message: error as string, status: "error" });
    }
  }

  if (req.method === "POST") {
    const { name, email, position } = req.body;

    try {
      const send = await prisma.user.create({
        data: {
          name,
          email,
          position,
        },
      });
      return res.status(200).json({ data: send, status: "success" });
    } catch (error: unknown) {
      return res.status(500).json({ message: error as string, status: "error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed", status: "fail" });
}
