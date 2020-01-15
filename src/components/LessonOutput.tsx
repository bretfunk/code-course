import React from "react";
import { StepsOutput } from "./StepsOutput";

// make StepsOutput take the array of steps and output the correct layout
export const LessonOutput: React.FC = () => {
  // these steps are dummy steps until the backend is build
  const lesson = {
    name: "TS",
    steps: [
      { type: "text", text: "This is text to explain something" },
      { type: "question", question: "2 + 2", answer: 4 }
    ]
  };
  return (
    <>
      <h2>{lesson.name}</h2>
      <StepsOutput />
    </>
  );
};
