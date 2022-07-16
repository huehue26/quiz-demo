import { db } from "../../firebase-config";
import { doc, collection, addDoc } from "firebase/firestore";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const questionColl = collection(db, "questions");
    await addDoc(questionColl, {
      title: req.body.title,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      answer: req.body.answer,
      author: req.body.author,
      author_email: req.body.author_email,
    });
    res.json({ message: "Question Uploaded Succesfully", user: true });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
