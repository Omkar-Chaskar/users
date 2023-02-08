import React from "react";
import { useUser } from "../context/userProvider";

function Navbar() {
  const { addNewUsersHandler, user, setLoading } = useUser();

  return (
    <header className="navbar">
      <h1 className="nav-heading">Reqres</h1>
      <button
        className="nav-button"
        onClick={() => {
          user.page === 1 ? addNewUsersHandler(2) : addNewUsersHandler(1);
          setLoading(true);
        }}
      >
        Get Users
      </button>
    </header>
  );
}

export default Navbar;
