import React from "react";
import "./Header.css";
import Cloud from "../../assets/cloud.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  return (
    <div className="Fullheader">
      <Link to="/">
        <div className="logo">
          <img className="logo" src={Cloud}></img>
        </div>
      </Link>
    </div>
  );
}

export default Header;
