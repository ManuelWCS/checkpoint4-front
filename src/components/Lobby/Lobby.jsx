import React from "react";
import "./Lobby.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import loop2 from "./loop.mp4";

function Lobby() {
  return (
    <div className="FullLobby">

      <div className="Menu">
        <Link className="Links" to="/home">
          {" "}
          <h3 className="btn-three"> HOME</h3>
        </Link>
        <Link className="Links" to="/profile">
          {" "}
          <h3 className="btn-three"> PROFILE</h3>
        </Link>
        <Link className="Links" to="/skills">
          {" "}
          <h3 className="btn-three"> SKILLS</h3>
        </Link>
        <Link className="Links" to="/login">
          {" "}
          <h3 className="btn-three"> LOG IN</h3>
        </Link>
      </div>
      <video id="videoBG" autoPlay muted loop>
        <source src={loop2} type="video/mp4" />
      </video>

    </div>
  );
}

export default Lobby;
