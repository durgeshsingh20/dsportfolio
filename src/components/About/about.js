import React from 'react'
import "./about.css"
const About = () => {
    return (
        <section id="about">
            <div className="aboutcontainer">
                <div className="container">
                    <span className="title">
                        LET ME INTRODUCE MY SELF
                    </span>
                    
                    <p className="para">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p> 
                    <p className="para">I am fluent in classics like <span className='cpp'>C++, Javascript and python.</span></p>
                    <p className="para">My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.</p>
                    <p className="para">Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                </div>

                <div className="divavatar">
                    <img src={require('../../assets/avatar.svg').default} alt="" className="avatar" />
                </div>
            </div>
        </section>
    )
}

export default About