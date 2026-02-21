import React, { createContext,useState } from "react";
import { ToastContainer } from "../ToastContainer.jsx";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = ({ type, message }) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, type, message }]);
    }

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }

    return (<ToastContext.Provider value={{ toasts, showToast, removeToast }}>
        {children}
        <ToastContainer />
    </ToastContext.Provider>
    )
}
