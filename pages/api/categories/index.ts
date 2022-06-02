import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

// GET/api/categories/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    // Connect the database
    // Parse Url (Page,Ast|Des,filter)
    // Pull data from database
    res.status(200).json({ message: "Successfully" });
  }
}
