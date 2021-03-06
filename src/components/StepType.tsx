import React, { useState } from "react";
import { StepOutputHOC } from "./StepOutputHOC";

type Props = {
  onChange: React.ChangeEvent<HTMLSelectElement>;
};

export const Step: React.FC = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="col my-4 p-4 border rounded">
        <div className="row justify-content-between">
          <select
            value={selected}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              setSelected(e.target.value)
            }
          >
            <option value=""></option>
            <option value="text">text</option>
            <option value="question">question and answer</option>
            <option value="submit">submit button</option>
          </select>

          <div onClick={() => setSelected("")}>X</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <StepOutputHOC selected={selected} />
      </div>
    </>
  );
};
