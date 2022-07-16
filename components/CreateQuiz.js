import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function CreateQuiz(props) {
  const [questionHeading, setQuestionHeading] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [err, setErr] = useState("");
  const { currentUser } = useAuth();
  const addQuestionHandler = async () => {
    console.log(questionHeading);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(option4);
    console.log(answer);
    if (
      !(questionHeading && option1 && option2 && option3 && option4 && answer)
    ) {
      setErr("Please fill all the fields");
      return;
    }
    setErr("");
    const response = await axios.post("/api/pushQuestion", {
      title: questionHeading,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      author: currentUser._delegate.displayName,
      author_email: currentUser._delegate.email,
    });
    console.log(response.data);
  };
  return (
    <div className="m-5 w-4/5 mx-auto">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="title"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setQuestionHeading(e.target.value)}
          placeholder=" "
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Question Title
        </label>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption1(e.target.value)}
          />
          <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Option-1
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption2(e.target.value)}
            required
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-2
          </label>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt3"
            id="opt3"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption3(e.target.value)}
            required
          />
          <label
            htmlFor="opt3"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-3
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt4"
            id="opt4"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption4(e.target.value)}
            required
          />
          <label
            htmlFor="opt4"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-4
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="ans"
          id="ans"
          placeholder=" "
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <label
          htmlFor="ans"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Correct Option
        </label>
      </div>
      <div className="text-red-500 pb-2">{err}</div>
      <div className="relative z-0 w-full mb-6 group">
        <button
          type="submit"
          className=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          onClick={addQuestionHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateQuiz;
