import React from "react";
import { Link } from "react-router-dom";

export const Course: React.FC = () => {
  const fakeLessons = [
    { name: "lesson 1", lesson: 1, tagline: "learn typescript!" },
    { name: "lesson 2", lesson: 2, tagline: "learn typescript!" },
    { name: "lesson 3", lesson: 3, tagline: "learn typescript!" },
    { name: "lesson 4", lesson: 4, tagline: "learn typescript!" },
    { name: "lesson 5", lesson: 5, tagline: "learn typescript!" },
    { name: "lesson 6", lesson: 6, tagline: "learn typescript!" }
  ];
  return (
    <div className="col">
      <div className="row justify-content-center bg-primary text-light">
        <h1>Lessons</h1>
      </div>
      <div className="row">
        {fakeLessons.map(({ name, tagline, lesson }, i) => (
          <div key={i}>
            <Box name={name} tagline={tagline} lesson={lesson} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Box = (props: any) => {
  return (
    <>
      <Link
        to={`/courses/1/lessons/${props.lesson}`}
        className="col border rounded text-center m-2"
        style={{ minWidth: "250px" }}
      >
        <div>{props.name}</div>
        <div>{props.tagline}</div>
      </Link>
    </>
  );
};
