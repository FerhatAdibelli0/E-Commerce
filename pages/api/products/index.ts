async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
