import React from "react";
import "./works.css";
import portfolio1 from '../../assets/img/skills/react11.png'
// import portfolio2 from '../../assets/img/skills/css3'
import portfolio3 from '../../assets/img/skills/javascript11.png'
import portfolio4 from '../../assets/img/skills/react11.png'
import portfolio5 from '../../assets/img/skills/nodejs11.png'
// import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Skills</h2>
      {/* <span className="worksdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem soluta labore.</span> */}
      <div className="worksImg">
        <img
          src={require('../../assets/img/skills/html.svg').default}
          alt="skill_1"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/css3.svg').default}
          alt="skill_2"
          className="workimg"
        />
        <img
          src={portfolio3}
          alt="skill_3"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/c++.svg').default}
          alt="skill_4"
          className="workimg"
        />
        <img
          src={portfolio5}
          alt="skill_5"
          className="workimg"
        />
        <img
          src={portfolio4}
          alt="skill_6"
          className="workimg"
        />
        
        <img
          src={require('../../assets/img/skills/python.svg').default}
          alt="skill_7"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/mongodb.svg').default}
          alt="skill_8"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/git.svg').default}
          alt="skill_9"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/github-icon-1.svg').default}
          alt="skill_10"
          className="workimg"
        />
        <img
          src={require('../../assets/img/skills/mysql.svg').default}
          alt="skill_11"
          className="workimg"
        />
        
        {/* <button className="worksbtn">submit</button> */}
        {/* <button className="btn" onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          Contact
        </button> */}
      </div>
    </section>
  );
};

export default Works;
