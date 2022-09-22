import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userStatus, setuserStatus] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("user", JSON.stringify({}));

    setuserStatus(true);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div>Welcome {user.length > 0 ? user[0].name : ""}</div>

      {userStatus ? (
        <button onClick={handleLogin}>login</button>
      ) : (
        <button onClick={handleLogout}>logout</button>
      )}

      {/* <button onClick={handleLogout}>{userStatus ? "login" : "logout"}</button> */}
    </>
  );
};

export default Welcome;
