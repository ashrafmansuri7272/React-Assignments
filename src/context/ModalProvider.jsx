import React from "react";
import { createContext, useState } from "react";
import { ModalContainer } from "../ModalContainer";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => { 

    const [modalState, setModalState] = useState(null);

    const openModal = (title, content) => setModalState({ title, content });
    const closeModal = () => setModalState(null);

    return (
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children} 
             <ModalContainer />
        </ModalContext.Provider>
    )
}