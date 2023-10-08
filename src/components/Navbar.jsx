import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Navbar;
