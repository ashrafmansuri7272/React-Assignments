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
];

export const AssignmentsPage = () => {
    return <main className="container">
    <h1>Assignments</h1>
    <div className="assignment-list">
      {assignments.map(({ id, title, level, path, goals }) => (
        <Link key={id} to={path} className="assignment-card-link assignment-item">
            <h2>{id}. {title}</h2>
            <p>{level}</p>
              {goals.map((goal, index) => (
                <p key={index} >{goal}</p>
              ))}
        </Link>
      ))}
      </div>
    </main>
}
