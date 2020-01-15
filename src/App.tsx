import React, { useState } from "react";
import { Step } from "./components/StepType";

const App: React.FC = () => {
  const [steps, setSteps] = useState([<Step />]);
  const handleClick = () => {
    setSteps([...steps, <Step />]);
  };
  return (
    <div className="App container">
      {steps.map(i => i)}
      <div className="row justify-content-around fixed-bottom mb-4">
        <button className="btn btn-secondary" onClick={handleClick}>
          Add Step
        </button>
        <button className="btn btn-primary">Submit Lesson</button>
      </div>
    </div>
  );
};

export default App;
