import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        fiverr<span>.</span>
      </div>
      <div className="mainMenu">
        <ul className="menu">
          <li>Business solutions </li>
          <li>Explore </li>
          <li>🌐 English </li>
          <li>Become a Seller </li>
          <li>Sign in </li>
        </ul>
        <button className="joinbtn">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
