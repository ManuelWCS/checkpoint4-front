import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import background from "../../assets/profil2.png";
function Profile() {
  const [profilePicture, setprofilePicture] = useState({ picture: "" });
  const [picture, setPicture] = useState({ picture: "" });
  const [pp, setpp] = useState({ picture: " " });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/admins/1`)
      .then((res) => {
        let result = res.data;
        setPicture(result[0]);
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/admins/1`)
      .then((res) => {
        let result = res.data;
        setpp(result[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="FullProfile">
      <div className="button">
        <Link to="/">
          {" "}
          <button className="button2"> RETOUR </button>
        </Link>
      </div>
      <h1 className="title">PROFIL</h1>

      <div className="subTitles">
        <div className="Bio">
          <p>
            Je suis né à Cancun le 28 Avril 1995 au Mexique, j'y ai habité 8 ans
            avant d'arriver en France. Il m'arrive d'y retourner pour voir ma
            famille, c'est grâce à eux que je peux garder les pieds sur terre et
            me rendre compte de la chance que j'ai de pouvoir vivre en Europe.
            J'ai toujours été passionné d'informatique, de nouvelles
            technologies, de jeux vidéos et surtout de musique.{" "}
          </p>

          <p>
            Ayant eu ma licence en langues, affaires et commerce international
            en 2018, j'ai décidé qu'il était temps pour moi d'arrêter de suivre
            le chemin de la facilité et de me lancer à fond dans ce que j'aimais
            faire. J'ai alors débuté le developpement car je trouvais que c'est
            quelque chose qui correspondait parfaitement : chercher des
            solutions, passer des heures à résoudre un problème et apprendre de
            ses erreurs !
          </p>
        </div>
        <div className="CardTitle">
          <h3>MON PROFIL</h3>
          <img className="profile " src={profilePicture.picture}></img>
        </div>
      </div>
      <hr className="style3 " />
      <div className="image">
        <img className="backgroundImg" src={background} />
      </div>
      <div className="timeline">
        <div className="card1">
          <div className="card1pic">
            <p className="cardbio1">Lycée Jacques Monod</p>
            <p className="cardbio"> Baccalauréat Economique et Social </p>
            <p className="date">2014</p>
          </div>
        </div>

        <div className="card2">
          <div className="card1pic">
            <p className="cardbio1">Université d'Orléans</p>
            <p className="cardbio">
              {" "}
              Licence en Langues Affaires et Commerce International{" "}
            </p>
            <p className="date">2018</p>
          </div>
        </div>

        <div className="card3">
          <div className="card1pic">
            <p className="cardbio1">Wild Code School Orléans</p>
            <p className="cardbio">
              {" "}
              Titre de Développeur Web & Web mobile
              {" "}
            </p>
            <p className="date">2021</p>
          </div>
        </div>
      </div>

      <hr className="style3 " />

      <div className="subTitles">
        <div className="CardTitle2">
          <h3>MES INTERÊTS </h3>
          <img className="profile " src={pp.picture}></img>
        </div>

        <div className="Bio">
          <p>
            {" "}
            Je suis surtout passioné de musique, cela fait plus de 7 ans que
            j'ai commencé à en faire avec des amis, depuis cette aventure m'a fait
            toucher à tout : enregistrement, mixage, production musicale,
            montage vidéo et bien d'autres domaines qui n'ont fait qu'enrichir
            mon savoir et c'est tout ce que je demande. J'ai eu la chance de
            pouvoir partager ma musique lors de mes passages en radio et faire
            quelques concerts en club. Aujourd'hui je prends le temps de faire
            les choses à ma manière afin que cela me représente le plus
            possible. Mon but dans la vie est de ne jamais arrêter d'apprendre
            tout en ayant une vision du monde assez large pour comprendre mon
            prochain. Je ne prétends pas être un artiste mais simplement
            quelqu'un qui aime la musique et qui partage la sienne avec
            d'autres.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
