import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  let style1 = "white";
  let style2 = "black";

  const icon = {
    fontSize: "30px",
  };

  return (
    <div
      className="container my-5"
      style={{ backgroundColor: { style1 }, color: { style2 } }}
    >
      <footer className="text-center">
        <div className="container">
          <hr className={`text-${style2} my-5`} />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className={`text-${style2}`}>
                  ProTasker: Your ultimate task management solution. Stay
                  organized, boost productivity, and accomplish your goals with
                  ease.
                </p>
              </div>
            </div>
          </section>

          <section className={`text-${style2} mb-5`}>
            <a
              href="https://www.facebook.com/parvez.pathan.9889/"
              className={`text-${style2} me-3 mx-2`}
            >
              <FaFacebook style={icon} />
            </a>

            <a
              href="https://www.instagram.com/prvzz_2522"
              className={`text-${style2} me-3 mx-2`}
            >
              <FaInstagram style={icon} />
            </a>

            <a
              href="https://www.linkedin.com/in/parvez-pathan-947631256/"
              className={`text-${style2} me-3 mx-2`}
            >
              <FaLinkedin style={icon} />
            </a>

            <a
              href="https://github.com/ParvezCodes"
              className={`text-${style2} me-3 mx-2`}
            >
              <FaGithub style={icon} />
            </a>

            <a
              href="https://parvezcodes.netlify.app/"
              className={`text-${style2} me-3 mx-2`}
            >
              <FaHeart style={icon} />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          <span className={`text-${style1}`}>© 2024 Copyright at </span>
          <a
            className={`text-${style1}`}
            href="https://parvezcodes.netlify.app/"
          >
            ParvezCodes
          </a>
        </div>
      </footer>
    </div>
  );
}
