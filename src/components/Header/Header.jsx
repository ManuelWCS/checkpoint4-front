import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="Fullheader">
           <Link to="/"><div className="logo"> 
            
            </div>
           </Link>
            
        </div>
    )
}

export default Header
