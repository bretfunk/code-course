import React from "react";
import { Link } from "react-router-dom";

const fakeCourses = [
  { name: "TS", tagline: "Learn TS!", category: "typescript", id: 1 },
  { name: "JS", tagline: "Learn JS!", category: "javascript", id: 2 },
  { name: "Elixir", tagline: "Learn Elixir!", category: "elixir", id: 3 },
  { name: "Ruby", tagline: "Learn Ruby!", category: "ruby", id: 4 }
];

export const Courses: React.FC = () => {
  return (
    <div className="col">
      <div className="row justify-content-center bg-primary text-light">
        <h1>Courses</h1>
      </div>
      <div className="row justify-content-between">
        {fakeCourses.map(({ name, tagline, id }) => (
          <Course name={name} tagline={tagline} id={id} />
        ))}
      </div>
    </div>
  );
};

const Course = (props: any) => {
  const { name, tagline, id } = props;
  return (
    <>
      <Link
        to={{ pathname: `/courses/${id}`, state: { course: id } }}
        className="col border rounded text-center m-2"
        style={{ minWidth: "250px", maxWidth: "250px" }}
      >
        <div>{name}</div>
        <div>{tagline}</div>
      </Link>
    </>
  );
};
