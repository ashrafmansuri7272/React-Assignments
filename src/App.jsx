import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "./Todo";
import { AssignmentsPage } from "./Assignments";
import { FileSystemAssignment } from "./FileSystemAssignment";
import { UserTable } from "./UserTable";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AssignmentsPage />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/file-system" element={<FileSystemAssignment />} />
      <Route path="/users-data-grid" element={<UserTable />} />
    </Routes>
  )
}
