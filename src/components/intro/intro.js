// import React from 'react'
import React, { useState } from 'react';
import './intro.css';
import bg from '../../assets/durgeshimg.png'
// import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";
import Home2 from '../home/Home2';


import Type from './Type';



const Intro = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="intro">
          I am <span className="introname">Durgesh Kumar </span>
          <br /> <div style={{ padding: 5, textAlign: "left" }}>
            <Type />
          </div>
        </span>
        {/* <p className="intropara">I am a proactive and dedicated pre-final year student pursuing Computer Science Engineering at Rustamji
          Institute of
          Technology, located in the heart of India, Madhya Pradesh. With a strong focus on Back-end development,
          I have gained
          valuable expertise in Full Stack Development to build robust and efficient web applications.</p>
         */}

        {/* <button className="btn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
          Contact
        </button> */}
        
        
        
        
      </div>
      
      <img src={bg} alt="bgimage" className="bg" />
      
    </section>
    
  );
}

export default Intro