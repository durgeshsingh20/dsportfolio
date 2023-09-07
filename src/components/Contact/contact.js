import React, { useRef } from "react";
import "./contact.css";
// import walmart from "../../assets/walmart.png";
// import adobe from "../../assets/adobe.png";
// import microsoft from "../../assets/microsoft.png";
// import facebook from "../../assets/facebook.png";
import facebookico from "../../assets/facebook-icon.png"
import twitterico from "../../assets/twitter.png"
import instaico from "../../assets/instagram.png"
import youtubeico from "../../assets/youtube.png"
import github from "../../assets/github.png"
import linkdin from "../../assets/linkdin.png"
import gmail from "../../assets/gmail.png"

import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_htnnjzd', 'template_w61nadi', form.current, 'RnBOJ_zm8VEafqie2')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("email send");
      }, (error) => {
        console.log(error.text);
        alert("email not send");
      });
  };


  return (
    <section id="contactpage">
      {/* <div id="client">
        <h1 className="contactpagetitle">My client</h1>
        <p className="clientdec">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="clientImgs">
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={adobe} alt="adobe" className="clientImg" />
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img src={facebook} alt="facebook" className="clientImg" />
        </div>
      </div> */}
      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        {/* <span className="contactdec">Lorem ipsum dolor sit amet.</span> */}

        {/* form start */}
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="your Name" name="user_name"/>
          <input type="email" className="email" placeholder="email" name="user_gmail" />
          <textarea
            name="message"
            id=""
            cols="15"
            rows="5"
            className="msg"
            placeholder="write something"
          ></textarea>
          <button type="submit" value='Send' className="submitbtn">Submit</button>
          <div className="links">
            <a href="https://www.facebook.com/"><img src={facebookico} alt="img" className="link" /></a>            
            <a href=""><img src={twitterico} alt="twitter" className="link" /></a>
            <a href=""><img src={instaico} alt="insta" className="link" /></a>
            <a href=""><img src={youtubeico} alt="youtube" className="link" /></a>
            <a href=""><img src={github} alt="github" className="link" /></a>            
            <a href=""><img src={linkdin} alt="linkdin" className="link" /></a>
            <a href=""><img src={gmail} alt="gmail" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
