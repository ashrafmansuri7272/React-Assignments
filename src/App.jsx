import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "./Todo";
import { AssignmentsPage } from "./Assignments";
import { FileSystemAssignment } from "./FileSystemAssignment";
import { UserTable } from "./UserTable";
import Dashboard from "./Dashboard";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Login } from "./Login";
import { Autocomplete } from "./Autocomplete";
import {InfiniteProducts} from "./InfiniteProducts"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AssignmentsPage />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/file-system" element={<FileSystemAssignment />} />
      <Route path="/users-data-grid" element={<UserTable />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/autocomplete" element={<Autocomplete />} />
      <Route path="/infinite-products" element={<InfiniteProducts />} />
    </Routes>
  )
}
