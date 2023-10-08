import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/Dashboard')}>Dashboard</button>
      <button onClick={() => navigate('/Login')}>Login</button>
    </div>
  );
}

export default Navbar;
