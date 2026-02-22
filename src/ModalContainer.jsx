import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./context/ModalProvider.jsx";

export const ModalContainer = () => {
    const { modalState, closeModal } = useContext(ModalContext);
    if (!modalState) return null;
    return (
        createPortal(<div className={"backdrop"}
            onClick={() => {
                closeModal();
            }}>
            <div className={"modal"}
                onClick={(e) => e.stopPropagation()}>
                <h2>{modalState.title}</h2>
                <p>{modalState.content}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>, document.body)
    )
}