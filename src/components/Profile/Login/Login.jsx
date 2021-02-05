import React from 'react';
import Header from '../../Header/Header';
import { useState, useEffect } from "react";
import axios from "axios";
import './Login.css';

function Login() {
const [skill1, setskill1] = useState({ skill1: ""});
const [skill2, setskill2] = useState({ skill2: ""});
const [skill3, setskill3] = useState({ skill3: ""});
const [description, setdescription] = useState({description:""});



const handlePut = (e, data) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8000/skills/1`, data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error)
    });
};


useEffect(() => {
    axios
    .get(`http://localhost:8000/profile/1`)
    .then((res) => {
        let result = res.data;
        setdescription(res.data[0])
        console.log(res.data)
    })
    .catch(function (error) {
        console.log(error)
    })
}, [])




    return (
        <div className="FullLogin">
            <Header/>
            <h1>Login</h1>
            <form className="form" onSubmit={(e) => handlePut(e, skill1)}>
            <label htmlFor="skill1"> Skill 1 : </label>
            <input
              type="text"
              id="skill1"
              onChange={(e) =>
                setskill1({
                  skill1: e.target.value,
                })
              }
            />
            <button>Change Skill 1</button>
          </form>

          <form className="form" onSubmit={(e) => handlePut(e, skill2)}>
            <label htmlFor="skill2"> Skill 2 : </label>
            <input
              type="text"
              id="skill2"
              onChange={(e) =>
                setskill2({
                  skill2: e.target.value,
                })
              }
            />
            <button>Change Skill 2</button>
          </form>

          <form className="form" onSubmit={(e) => handlePut(e, skill3)}>
            <label htmlFor="skill3"> Skill 3 : </label>
            <input
              type="text"
              id="skill3"
              onChange={(e) =>
                setskill3({
                  skill3: e.target.value,
                })
              }
            />
            <button>Change Skill 3</button>
          </form>

          <form className="form" onSubmit={(e) => handlePut(e, description)}>
            <label htmlFor="description"> Description  : </label>
            <input
              type="text"
              id="description"
              onChange={(e) =>
                setdescription({
                  description: e.target.value,
                })
              }
            />
            <button>Change Description</button>
          </form>

          <div className="fullCard">
              <div className="cardPicture">
              <img className="skillPicture" src={description.picture}/>
              <p> {description.description} </p>

              </div>
          </div>
            
            
        </div>
    )
}

export default Login
