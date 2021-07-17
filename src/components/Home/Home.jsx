import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import key from "../../assets/key2.png";
import backgroundImg from "../../assets/home.jpg";
import ct05 from "../../assets/ct05.png";
import Cloud1 from "../../assets/sword.png";
import Cloud2 from "../../assets/sword2.png";
import Coin from "../../assets/coin.png";
import ct from "../../assets/CT.png";
import youtubeLogo from "../../assets/logoYT.png";
import SoundcloudLogo from "../../assets/soundcloud.png";
import coin2 from "../../assets/coin2.png";

function Home() {
  const [userName, setUserName] = useState("");
  const [isClicked, setisCliked] = useState(false);
  const [isClicked2, setisCliked2] = useState(false);
  const [isClicked3, setisCliked3] = useState(false);

  function ChangeBool() {
    setisCliked(true);
    console.log(isClicked);
  }

  function CloseBool() {
    setisCliked(false);
    console.log(isClicked);
  }

  function ChangeBool2() {
    setisCliked2(true);
    console.log(isClicked);
  }

  function CloseBool2() {
    setisCliked2(false);
    console.log(isClicked);
  }

  function ChangeBool3() {
    setisCliked3(true);
    console.log(isClicked);
  }

  function CloseBool3() {
    setisCliked3(false);
    console.log(isClicked);
  }

  return (
    <div className="FullHome" id="FullHome">
      <Header />
      <div className="homeTitle">
        <h1 className="title1">
          Bienvenue
          <strong className="strong2"> {userName} </strong>
        </h1>
      </div>
      <div className="paragraph">
        <input
          className="inputName"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </div>

      <div className="boxes">
        <div
          className={isClicked ? "box1Bigger" : "box1"}
          id="ct05"
          onMouseEnter={ChangeBool}
          onMouseLeave={CloseBool}
        >
          <div className={isClicked ? "imageChangeante" : "NoDisplay"}>
            <img src={ct}></img>
          </div>

          <div className={isClicked ? "box1Details" : "NoDisplay"}>
            <p className="trackTitle">CT05 </p> <br />
            <p className="trackDescription"> Instrumentale :</p>{" "}
            <p className="trackDetails"> Bro Connexion </p> <br />
            <p className="trackDescription"> Mix/Master :</p>{" "}
            <p className="trackDetails"> 7evenBeats </p>
            <p className="trackDescription"> FX :</p>{" "}
            <p className="trackDetails"> Aster Verrier </p>
            <div className="trackLinks">
              <Link
                to={{ pathname: "https://www.youtube.com/watch?v=KIYFai8fJ38" }}
                target="_blank"
              >
                {" "}
                <img className="LinkYoutube" src={youtubeLogo} />{" "}
              </Link>
              <Link
                to={{
                  pathname: "https://soundcloud.com/user-263126339/doza-ct05",
                }}
                target="_blank"
              >
                {" "}
                <img className="LinkSC" src={SoundcloudLogo} />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={isClicked2 ? "box2Bigger" : "box2"}
          onMouseEnter={ChangeBool2}
          onMouseLeave={CloseBool2}
        >
          <div className={isClicked2 ? "imageChangeante2" : "NoDisplay"}>
            <img id="Cloud" className="itemBox2" src={Cloud2}></img>
          </div>
          <div className={isClicked2 ? "box2Details" : "NoDisplay"}>
            {" "}
            <p className="trackTitle">CLOUD </p> <br />
            <p className="trackDescription"> Instrumentale :</p>{" "}
            <p className="trackDetails"> Hkeybeats </p> <br />
            <p className="trackDescription"> Mix/Master :</p>{" "}
            <p className="trackDetails"> 7evenBeats </p>
            <p className="trackDescription"> FX :</p>{" "}
            <p className="trackDetails"> Gaspard Verrier </p>
            <div className="trackLinks">
              <Link
                to={{ pathname: "https://www.youtube.com/watch?v=KIYFai8fJ38" }}
                target="_blank"
              >
                {" "}
                <img className="LinkYoutube" src={youtubeLogo} />{" "}
              </Link>
              <Link
                to={{
                  pathname: "https://soundcloud.com/user-263126339/doza-ct05",
                }}
                target="_blank"
              >
                {" "}
                <img className="LinkSC" src={SoundcloudLogo} />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={isClicked3 ? "box3Bigger" : "box3"}
          onMouseEnter={ChangeBool3}
          onMouseLeave={CloseBool3}
        >
          <div className={isClicked3 ? "imageChangeante3" : "NoDisplay"}>
            <img id="Cloud" className="itemBox2" src={coin2}></img>
          </div>
          <div className={isClicked3 ? "box3Details" : "NoDisplay"}>
            {" "}
            <p className="trackTitle">PARI </p> <br />
            <p className="trackDescription"> Instrumentale :</p>{" "}
            <p className="trackDetails"> Elbyondatrack </p> <br />
            <p className="trackDescription"> Mix/Master :</p>{" "}
            <p className="trackDetails"> 7evenBeats </p>
            <p className="trackDescription"> FX :</p>{" "}
            <p className="trackDetails"> Gaspard Verrier </p>
            <div className="trackLinks">
              <Link
                to={{ pathname: "https://www.youtube.com/watch?v=KIYFai8fJ38" }}
                target="_blank"
              >
                {" "}
                <img className="LinkYoutube" src={youtubeLogo} />{" "}
              </Link>
              <Link
                to={{
                  pathname: "https://soundcloud.com/user-263126339/doza-ct05",
                }}
                target="_blank"
              >
                {" "}
                <img className="LinkSC" src={SoundcloudLogo} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
