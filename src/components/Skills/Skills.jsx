import React from "react";
import Header from "../Header/Header";
import "./Skills.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skill1, setSkill1] = useState({ skill1: "" });
  const [skill1picture, setSkill1picture] = useState({ skill1picture: "" });
  const [skill2, setSkill2] = useState({ skill2: "" });
  const [skill2picture, setSkill2picture] = useState({ skill2picture: "" });
  const [skill, setSkills] = useState({ skill3: "" });
  const [skill3picture, setSkill3picture] = useState({ skill3picture: "" });


  useEffect(() => {
    axios
      .get(`http://localhost:8000/skills/1`)
      .then((res) => {
        let result = res.data;
        setSkills(result[0]);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="FullSkill">
      <Header />
      <h1 className="title3">MY SKILLS</h1>
      <div className="fullCard">
        <div className="cardPicture">
            <img  className="skillPicture" src={skill.skill1picture}/>
          <h3 className="skillTitles">{skill.skill1}</h3>
          
        </div>

        <div className="skillDescription">
          <p> Lors de notre premier projet en tant qu'apprentis développeurs nous avons réalisé un CV d'un personnage fictif basé sur du HTML et CSS.
              Nous avons utilisé javascript pour dynamiser le contenu et géré un envoi de mails ainsi que des animations dans notre page.7
              Découvrez mon premier projet : le CV du Doc de <strong> <a className="links" href="https://suspicious-hamilton-96858b.netlify.app/#" >Retour vers le Futur </a></strong>
          </p>
        </div>
      </div>
      <div className="fullCard">
        <div className="cardPicture2">
        <img className="skillPicture" src={skill.skill2picture}/>
        <h3 className="skillTitles">{skill.skill2}</h3>
          
        </div>

        <div className="skillDescription">
          <p> Ma technologie de prédilection ! 
              Je me suis spécialisé dans le parcours JavaScript lors de mes études à la Wild Code School.
              React est pour moi un moyen très simple de dynamiser du contenu web avec une Single App page !
              Découvrez mon application React qui combine deux APIs le sport et les super héros :  <strong> <a className="links" href="https://superheroworkout.netlify.app/" >Superhero Workout </a></strong>
          </p>
        </div>
      </div>
      <div className="fullCard">
        <div className="cardPicture">
        <img className="skillPicture" src={skill.skill3picture}/>
        <h3 className="skillTitles">{skill.skill3}</h3>
          
        </div>

        <div className="skillDescription">
          <p> Node et Express répresentent pour moi un moyen d'intégrer des données pour les rendre dynamiques
              dans mes applications React. Combinés à MySql ces deux technologies m'offrent le pouvoir 
              de manipuler des données et de construire des sites complets aussi bien du côté Front-End que Back-end
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
