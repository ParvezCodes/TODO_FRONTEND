import React, { useContext } from "react";
import "../styles/contact.css";
import toast from "react-hot-toast";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Report = () => {
  const { isAuthenticated } = useContext(Context);
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  const contactForm = document.getElementById("contact-form");

  const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_r0g7bm9",
        "template_g7ljwdj",
        "#contact-form",
        "4VI5bi0hkPe6iJreq"
      )
      .then(
        () => {
          toast.success("Message sent successfully✅");

          // Clear input fields
          contactForm.reset();
        },
        () => {
          // Show error message
          toast.error("Message not sent (service error)❌");
        }
      );
  };

  return (
    <form id="contact-form">
      <input
        name="user_name"
        type="text"
        className="feedback-input"
        placeholder="Name"
      />
      <input
        name="user_email"
        type="text"
        className="feedback-input"
        placeholder="Email"
      />
      <textarea
        name="user_message"
        className="feedback-input"
        placeholder="Message"
      ></textarea>
      <button onClick={sendEmail} className="msg_btn">
        Send
      </button>
    </form>
  );
};

export default Report;
