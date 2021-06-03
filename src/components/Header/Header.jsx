import React from 'react';
import './Header.css';


import { Link } from 'react-router-dom';
import {useEffect , useState} from 'react';
import axios from 'axios';




function Header() {

    const [picture, setPicture] = useState({ picture: ""})

useEffect(() => {
    axios
    .get(`http://localhost:8000/admins/1`)
    .then((res) => {
        let result = res.data
        setPicture(result[0])
        
    })
    .catch(function(error) {
        console.log(error)
    });
},[]);
    return (
        <div className="Fullheader">
           <Link to="/"><div className="logo"> 
           <img className="logo" src={picture.picture}></img>
            
            </div>
           </Link>
            
        </div>
    )
}

export default Header
