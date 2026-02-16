import React from "react";
import { Link } from "react-router-dom";

const assignments = [
  {
    id: "02",
    title: "To-do List",
    path: "/todo",
    level: "Beginner+",
    goals: ["list rendering", "forms", "state updates"],
  },
  {
    id: "04",
    title: "File System Explorer (Mock)",
    path: "/file-system",
    level: "Intermediate",
    goals: [
      "recursive component rendering",
      "nested data structure traversal",
      "folder expand/collapse state",
    ],
  },
  {
    id: "05",
    title: "Users Data Grid",
    path: "/users-data-grid",
    level: "Advanced",
    goals: [
      "data grid rendering",
      "sorting and filtering",
      "pagination",
    ],
  },
  {
    id: "06",
    title: "Dashboard with Authentication",
    path: "/dashboard",
    level: "Advanced",
    goals: [
      "protected routes",
      "context for auth state",
      "integration with Firebase Auth",
    ],
  },
  {
    id: "07",
    title: "Autocomplete Component",
    path: "/autocomplete",
    level: "Intermediate",
    goals: [
      "fetching data from an API",
      "debouncing user input",
      "rendering suggestions",
    ],
  },
];

export const AssignmentsPage = () => {
  return <main className="container">
    <h1>Assignments</h1>
    <div className="assignment-list">
      {assignments.map(({ id, title, level, path, goals }) => (
        <Link key={id} to={path} className="assignment-card-link assignment-item">
          <h2>{id} {title}</h2>
          <p className="assignment-level-label">{level}</p>
          {goals.map((goal, index) => (
            <p key={index} className="assignment-goals-label">{goal}</p>
          ))}
        </Link>
      ))}
    </div>
  </main>
}
