import React from 'react';
import "./Lobby.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Lobby() {
    return (
        <div className="FullLobby">
            <Header/>
            <div className="Menu">
            <Link className="Links" to ="/home"> <h3 className="MenuTitle"> HOME</h3></Link>
            <Link className="Links" to ="/profile"> <h3 className="MenuTitle"> PROFILE</h3></Link>
            <Link className="Links" to ="/skills"> <h3 className="MenuTitle"> SKILLS</h3></Link>
            <Link className="Links" to ="/login"> <h3 className="MenuTitle"> LOG IN</h3></Link>
                
               

            </div>

            
        </div>
    
    )
}

export default Lobby
