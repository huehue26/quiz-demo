import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header";
import ModalPopup from "../../components/Modal";

function Take(props) {
  const questions = props.data;
  const answer = new Array(questions.length);
  const [visible, setVisible] = useState(false);
  let correct = 0;
  const validateMarks = () => {
    correct = 0;
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].answer == answer[i]) correct = correct + 1;
    }
    setVisible(true);
  };
  return (
    <div>
      <Header />
      {visible ? (
        <ModalPopup
          message={`You have got ${correct} Questions out of ${questions.length}`}
        />
      ) : (
        ""
      )}
      <div className="m-5 w-4/5 mx-auto">
        {questions.length
          ? questions.map((question, index) => {
              return (
                <div className="mb-10" key={index}>
                  <div className="text-xl pb-2">{question.title}</div>
                  <div className="text-md grid grid-cols-2">
                    <div className="flex flex-col">
                      <div>1. {question.option1}</div>
                      <div>2. {question.option2}</div>
                    </div>
                    <div className="flex flex-col">
                      <div>3. {question.option3}</div>
                      <div>4. {question.option4}</div>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <div className="ml-24 mr-24 text-md ">
                      <input
                        type="number"
                        className="border-b-2 focus:outline-none pl-2"
                        onChange={(e) => {
                          answer[index] = e.target.value;
                        }}
                      />
                    </div>
                    <div className="">Correct Option</div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className=" w-1/2 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          onClick={() => validateMarks()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Take;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/api/getQuestions");
  const data = response.data;
  return {
    props: { data },
  };
}
