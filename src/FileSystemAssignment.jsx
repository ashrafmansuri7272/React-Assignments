import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { mockFileTree } from "./constants";
import { FileNode } from "./FileNode";

export const FileSystemAssignment = () => {
  return (
  <div>
    <FileNode node={mockFileTree} />
    <Link to="/">Back to Assignments</Link>
  </div>
  );
}