import React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/create" className="btn btn-primary">
        Create Course
      </Link>
      <Link to="/courses" className="btn btn-secondary">
        Find Course
      </Link>
    </>
  );
};
