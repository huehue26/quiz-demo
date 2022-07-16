import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("questions");
    const questionDetails = await db.collection("demo").find({}).toArray();
    res.json(questionDetails);
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
