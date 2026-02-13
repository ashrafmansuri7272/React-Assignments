import React, { use, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
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
