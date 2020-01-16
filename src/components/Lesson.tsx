import React, { useState } from "react";

const fakeLesson = {
  name: "TS",
  steps: [
    { type: "text", text: "This is text to explain something" },
    { type: "question", question: "2 + 2", answer: "4" }
  ]
};
// make StepsOutput take the array of steps and output the correct layout
export const Lesson: React.FC = () => {
  // these steps are dummy steps until the backend is build
  return (
    <div className="col">
      <div className="row">
        <h2>Lesson: {fakeLesson.name}</h2>
      </div>
      <div className="row">
        <StepsOutput steps={fakeLesson.steps} />
      </div>
    </div>
  );
};

// maps the various steps and sends them to the StepsHOC
const StepsOutput = ({ steps }: { steps: any }) => {
  return (
    <div className="col-12">
      {steps.map((step: any, i: number) => (
        <div key={i}>
          <StepsHOC step={step} />
        </div>
      ))}
    </div>
  );
};

// returns the correct step component based on the step type
const StepsHOC = ({ step }: { step: any }) => {
  switch (step.type) {
    case "text": {
      return <TextStep {...step} />;
    }
    case "question": {
      return <QuestionStep {...step} />;
    }
    default:
      return <TextStep {...step} />;
  }
};

const TextStep = (step: any) => {
  return (
    <div className="border rounded m-4">
      <p>{step.text}</p>
    </div>
  );
};

const QuestionStep = ({ question, answer }: any) => {
  const [userAnswer, setUserAnswer] = useState();
  const [submittedAnswer, setSubmittedAnswer] = useState();
  return (
    <div className="border rounded m-4">
      <p>{question}</p>
      <input
        type="text"
        placeholder="enter answer"
        onChange={e => setUserAnswer(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => setSubmittedAnswer(userAnswer)}
      >
        Submit answer
      </button>
      <h5>{submittedAnswer === answer ? "correct" : "wrong"}</h5>
    </div>
  );
};
