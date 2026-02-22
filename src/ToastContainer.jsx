import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ToastContext } from './context/ToastProvider.jsx';
import { ToastItem } from './ToastItem.jsx';
import { createPortal } from 'react-dom';

export const ToastContainer = () => {
    const { toasts } = useContext(ToastContext)
    
    return (createPortal(   
        <div style={{ position: "fixed", top: "10px", right: "10px"}}>
            {toasts.map(toast => <ToastItem key={toast.id} {...toast} />)}
        </div>
    , document.body));
}

    