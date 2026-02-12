import React, { useState, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";

export const UserTable = () => {
    const { users: {users}, loading, error } = useFetch("https://dummyjson.com/users");
    const [currentPage, setCurrentPage] = useState(1);
    console.log("users", users);
    const totalPages = Math.ceil(users?.length / 5);
    console.log("totalPages", totalPages);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const filteredUsers = users?.length && users.slice((currentPage-1) * 5, currentPage * 5);
    return (
        <div>
            <h1>Users Data Grid</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers?.length && filteredUsers?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            <Link to="/" className="back-link">Back to Assignments</Link>
        </div>
    )
} 
