import React, { useState } from "react";

type Props = {
  selected: string;
};

const hoc = (selected: string) => {
  switch (selected) {
    case "text": {
      return <TextArea />;
    }
    case "code question": {
      return <CodeQuestion />;
    }
    default:
      return <SelectStep />;
  }
};

const TextArea = (): JSX.Element => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  return (
    <div className="col">
      <div className="row">
        <textarea
          placeholder="Add text."
          className="w-100"
          value={textAreaValue}
          onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
            setTextAreaValue(ev.target.value)
          }
        />
      </div>
    </div>
  );
};
const CodeQuestion = (): JSX.Element => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<any>("");
  return (
    <>
      <div className="col">
        <div className="row">
          <textarea
            className="w-100"
            placeholder="Question"
            value={textAreaValue}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setTextAreaValue(ev.target.value)
            }
          />
        </div>
        <div className="row mt-4">
          <h2 className="w-50">Answer:</h2>
          <input
            type="text"
            className="w-50"
            value={correctAnswer}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setCorrectAnswer(ev.target.value)
            }
          />
        </div>
      </div>
    </>
  );
};

const SelectStep: React.FC = () => {
  return <h1>Select Step Type</h1>;
};
export const StepOutputHOC: React.FC<Props> = ({ selected }) => {
  return <>{hoc(selected)}</>;
};
