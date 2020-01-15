import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateLesson } from "./components/CreateLesson";
import { HomePage } from "./components/HomePage";
import { Courses } from "./components/Courses";
import { Course } from "./components/Course";
import { Lesson } from "./components/Lesson";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
          <a className="navbar-brand text-dark" href="/">
            Code Course
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/courses">
                Find Courses
              </a>
              <a className="nav-item nav-link" href="/create">
                Create A Course
              </a>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/courses/:id/lessons/:id">
            <Lesson />
          </Route>
          <Route path="/courses/:id">
            <Course />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/create">
            <CreateLesson />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
