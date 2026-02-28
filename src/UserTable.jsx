import React, { useState, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { useDebounce } from "./hooks/useDebounce";
import { useModal } from "./hooks/useModal";
export const UserTable = () => {
  const {
    data: { users = [] } = {},
    loading,
    error,
  } = useFetch("https://dummyjson.com/users");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { openModal, closeModal } = useModal();
  const debouncedValue = useDebounce(searchTerm, 1000);
  const totalPages = Math.ceil(users?.length / 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredUsers =
    users?.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(debouncedValue.toLowerCase());
    }) || [];
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div>
      <h1>Users Data Grid</h1>
      <input
        value={searchTerm}
        placeholder="Search users..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers?.length &&
            paginatedUsers?.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <div style={{ marginTop: "20px" }}>
        {" "}
        OpenModal:{" "}
        <button
          onClick={() =>
            openModal("User Info", "This is some user information")
          }
        >
          Open Modal
        </button>{" "}
      </div>
      <Link to="/" className="back-link">
        Back to Assignments
      </Link>
    </div>
  );
};
