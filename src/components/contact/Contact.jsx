import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";

const Contact = () => {
  const form = useRef();
  const [loader, setLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("Send Message");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_3wg7ktj",
        "template_6t2krys",
        form.current,
        "49ctgLIfpRsyx7BBt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoader(false);
          setLoaderText("Message Sent!");
          setTimeout(() => {
            setLoaderText("Send Message");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setLoader(false);
          setLoaderText("Try Again");
          setTimeout(() => {
            setLoaderText("Send Message");
          }, 3000);
        }
      );
  };

  return (
    <div className="contact__section" id="contact">
      <div className="contact__container">
        <div className="details">
          <h2>Say Hi and Let's Talk about Future Collaborations</h2>
          <p>Let's Talk:</p>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/nsikak-essien-1ba609193/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider
                value={{ size: "20px", className: "icon", color: "#9a85fc" }}
              >
                <BsLinkedin />
              </IconContext.Provider>
            </a>
            <a
              href="https://github.com/nsikakessien"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider
                value={{ size: "20px", className: "icon", color: "#9a85fc" }}
              >
                <FaGithub />
              </IconContext.Provider>
            </a>
            <a href="mailto: nsikakessien66@gmail.com">
              <IconContext.Provider value={{ size: "20px", color: "#9a85fc" }}>
                <AiOutlineMail />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="form">
          <div className="form__container">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={(e) => setUserMessage(e.target.value)}
              ></textarea>
              <div className="btn__wrapper">
                {loader ? (
                  <div className="btn">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <input
                    type="submit"
                    disabled={!userName || !userEmail || !userMessage}
                    value={loaderText}
                    className="btn"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
