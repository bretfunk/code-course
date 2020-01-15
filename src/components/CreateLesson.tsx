import React, { useState } from "react";
import { Step } from "./StepType";

export const CreateLesson: React.FC = () => {
  const [steps, setSteps] = useState([<Step />]);
  const handleClick = () => {
    setSteps([...steps, <Step />]);
  };
  return (
    <div className="create-lesson p-4">
      {steps.map(i => i)}
      <div style={{ height: "50px" }} />
      <div className="row justify-content-around mb-4">
        <button className="btn btn-secondary" onClick={handleClick}>
          Add Step
        </button>
        <button className="btn btn-primary">Submit Lesson</button>
      </div>
    </div>
  );
};
