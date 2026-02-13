import React, { useContext } from "react";

import AuthContext from "./context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext)

    return (
        <div>
            <h1>Welcome, {user.displayName}!</h1>
            <button onClick={logout}>Logout</button>
            <Link to="/">Go to Home</Link>
        </div>
    )

}