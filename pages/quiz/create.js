import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateQuiz from "../../components/CreateQuiz";
import { protectedRoute } from "../../components/ProtectedRoute";

function create_quiz() {
  return (
    <div>
      <Header />
      <div className="text-3xl flex justify-center items-center">
        Add Questions to Quiz Id 1
      </div>
      <CreateQuiz />
      <Footer />
    </div>
  );
}

export default protectedRoute(create_quiz);
