import React, { useState } from "react";
import "./navbar.css";
import logo from "./smartphone1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} />
          SmartMobiles
        </div>

        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
          <li>
            <a>Contact</a>
          </li>

          <div className="search">
            {" "}
            <input type="text" placeholder="Search.."></input>
          </div>
        </ul>
        <i
          onClick={() => {
            setOpen(!open);
          }}
          className="burger fas fa-bars"
        ></i>
      </nav>
    </div>
  );
};

export default Navbar;
