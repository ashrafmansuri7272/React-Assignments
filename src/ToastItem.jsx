import React, { useEffect, useState, useContext } from "react";
import { ToastContext } from "./context/ToastContext.jsx";
export const ToastItem = ({ id, type, message }) => {

    const { removeToast } = useContext(ToastContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, [id, removeToast]);

    return (
        <div style={{ display: "block", backgroundColor: type === "success" ? "green" : "red", color: "white", padding: "10px", marginBottom: "10px" }}>
            <button onClick={() => removeToast(id)} style={{ marginRight: "10px", position: "relative", top: "-2px" }}>X</button>
            <p>{message}</p>
        </div>
    )
} 