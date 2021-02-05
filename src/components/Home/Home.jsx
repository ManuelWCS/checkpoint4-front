import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import key from "../../assets/key2.png";

function Home() {
  const [skill1, setSkill1] = useState({ skill1picture: "" });
  const [profilePicture, setprofilePicture] = useState({ picture: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/skills/1`)
      .then((res) => {
        let result = res.data;
        setSkill1(result[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/profile/1`)
      .then((res) => {
        let result = res.data;
        setprofilePicture(result[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="FullHome">
      <Header />
      <div className="homeTitle">
        <h1 className="title1">Bienvenue sur mon checkpoint n°4 !</h1>
      </div>
      <div className="paragraph">
        <p>
          {" "}
          Vous êtes sur mon <strong>portefolio</strong>, vous pouvez naviguer
          entre les différentes pages afin d'en apprendre plus sur moi.{" "}
          <br></br>
          <i>
            Welcome to my <strong>portfolio</strong> be safe to browse all pages
            to know a little more about myself
          </i>
        </p>
      </div>
      <div className="boxes">
        <Link className="Links" to="/skills">
          {" "}
          <div className="box1">
            <div className="cardPicture">
              <img className="cardPicture" src={skill1.skill2picture} />
            </div>
            <div className="cardTitle">
              {" "}
              <h2>SKILLS</h2>
              <p className="cardDescription">
                Découvrez mes technologies de prédilection !
              </p>
            </div>
          </div>
        </Link>
        <Link className="Links" to="/profile">
          {" "}
          <div className="box2">
            <div className="cardPicture">
              <img className="cardPicture" src={profilePicture.picture} />
            </div>
            <div className="cardTitle">
              <h2>PROFILE</h2>
              <p className="cardDescription">
                D'ou je viens, qui je suis et ou je me vois à l'avenir..
              </p>
            </div>
          </div>
        </Link>
        <Link className="Links" to="/profile">
          {" "}
          <div className="box3">
            <div className="cardPicture">
              <img className="cardPicture" src={key} />{" "}
            </div>
            <div className="cardTitle">
              <h2>LOG IN </h2>
              <p className="cardDescription">
                Inscrivez-vous pour que mon portefolio devienne le votre.
              </p>
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
