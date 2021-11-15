import React, { useEffect, useState } from "react";
import "./navbar.css";

export const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_profile"
        src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png"
        alt="Profile"
      />
    </div>
  );
};
