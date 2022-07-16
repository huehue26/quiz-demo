import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const finalQuestions = [];
      console.log(finalQuestions);
      const querySnapshot = await getDocs(collection(db, "questions"));
      querySnapshot.forEach((doc) => {
        if (doc.data()) finalQuestions.push(doc.data());
      });
      res.json({ finalQuestions });
    } catch {
      res.json({ message: "error" });
    }
  }
}
