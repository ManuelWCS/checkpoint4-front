import React from 'react'
import './Home2.css'
import loop2 from '../../assets/loop.mp4';

function Home2() {

   

    

    return (

       <div className="bg0">
           <div className="bg">
               <div className="insideBg">
                   <h1 className="ctTitle"> <a href="https://www.youtube.com/"> CT05</a></h1>
                   <p className="ctDescription">  pd gay</p>
               </div>
           <video className="videoBG" id="videoBG" autoPlay muted loop>
        <source src={loop2} type="video/mp4" className="videoBG"/>
      </video>
           </div>
           <div className="bg2"></div>
           <div className="bg3"></div>
            </div>
            

    )
}

export default Home2
