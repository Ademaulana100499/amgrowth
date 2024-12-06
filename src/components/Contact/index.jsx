import "./style.css";
import React, { useState } from "react";

export const Contact = (props) => {
  const { socialMedia } = props;
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    window.emailjs
      .sendForm(
        "service_sdhvkru",
        "template_eizoi7m",
        "#contact-form",
        "x-9QR59Q68dJyMtjv"
      )
      .then(
        () => {
          setMessageStatus("Message sent successfully ✅");
          setTimeout(() => {
            setMessageStatus("");
          }, 5000);
          e.target.reset();
        },
        () => {
          setMessageStatus("Message not sent (services error) ❌");
        }
      );
  };
  return (
    <section className="contact section " id="contact me">
      <h2 className="section__title">CONTACT ME</h2>
      <div className="container grid contact__container">
        <form
          action=""
          className="grid contact__form"
          id="contact-form"
          onSubmit={sendEmail}
        >
          <div className="grid contact__group">
            <input
              type="text"
              name="user_name"
              placeholder="Names"
              className="contact__input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="contact__input"
            />
          </div>
          <textarea
            name="user_message"
            placeholder="Message"
            required
            className="contact__input contact__area"
            id=""
          ></textarea>
          <button className="button contact__button">Send Message</button>
          <p className="contact__message">{messageStatus}</p>
        </form>

        <div className="grid contact__social">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              target="_blank"
              className="contact__social-link"
              key={item.id}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
