import React, { useState, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { DebouncedInput } from "./DebouncedInput";

export const UserTable = () => {
    const { users: {users}, loading, error } = useFetch("https://dummyjson.com/users");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    console.log("users", users);
    const totalPages = Math.ceil(users?.length / 5);
    console.log("totalPages", totalPages);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const filteredUsers = users?.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    }) || [];
    const paginatedUsers = filteredUsers.slice((currentPage-1) * 5, currentPage * 5);
    return (
        <div>
            <h1>Users Data Grid</h1>
            <DebouncedInput delay={1000} onDebounceChange={setSearchTerm} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers?.length && paginatedUsers?.map((user) => (
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
