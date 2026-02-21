import React, { use, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "./context/ToastContext";

export function Login() {
  const { user } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
      showToast({ type: "success", message: "Logged in successfully!" });
    }
  }, [user, navigate]);

  return (
    <div>
      <button onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}
