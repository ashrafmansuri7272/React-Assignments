import React from "react";
import { Link } from "react-router-dom";

const assignments = [
  {
    id: "02",
    title: "To-do List",
    path: "/todo",
    level: "Beginner",
    goals: ["list rendering", "form handling", "basic state updates"],
  },
  {
    id: "04",
    title: "File System Explorer (Mock)",
    path: "/file-system",
    level: "Intermediate",
    goals: [
      "recursive component rendering",
      "nested data traversal",
      "expand and collapse state management",
    ],
  },
  {
    id: "05",
    title: "Users Data Grid",
    path: "/users-data-grid",
    level: "Intermediate+",
    goals: [
      "tabular data rendering",
      "sorting and filtering",
      "client-side pagination",
    ],
  },
  {
    id: "06",
    title: "Dashboard with Authentication",
    path: "/dashboard",
    level: "Advanced",
    goals: [
      "authentication flow",
      "protected routes",
      "global auth state management",
    ],
  },
  {
    id: "07",
    title: "Autocomplete Component",
    path: "/autocomplete",
    level: "Intermediate",
    goals: [
      "API-driven suggestions",
      "debounced input handling",
      "dynamic list rendering",
    ],
  },
  {
    id: "08",
    title: "Infinite Products",
    path: "/infinite-products",
    level: "Intermediate",
    goals: [
      "infinite scrolling",
      "paginated data fetching",
      "loading and end-state handling",
      "DATA LOADING",
    ],
  },
];

export const AssignmentsPage = () => {
  return (
    <main className="container">
      <h1>Assignments</h1>
      <div className="assignment-list">
        {assignments.map(({ id, title, level, path, goals }) => (
          <Link
            key={id}
            to={path}
            className="assignment-card-link assignment-item"
          >
            <h2>
              {id} {title}
            </h2>
            <p className="assignment-level-label">{level}</p>
            {goals.map((goal, index) => (
              <p key={index} className="assignment-goals-label">
                {goal}
              </p>
            ))}
          </Link>
        ))}
      </div>
    </main>
  );
};
