import React from "react";
import "../Home/profile.css";
import Typical from "react-typical";
export default function Profile() {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="overlay"></div>
            <div className="profile-details-role">
              <h3 className="profile-name">Rajat Chugh</h3>
              <h2>I'm a Frontend Developer</h2>
              <a href="#about" class="btn-scroll scrollto" title="Scroll Down">
                <i class="fas fa-chevron-down"></i>
              </a>
              {/* <span className="primary-text">
                {""}
                <h1>
                  {""}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "HTML5",
                      2000,
                      "CSS3",
                      2000,
                      "BOOTSTRAP 5",
                      2000,
                      "JAVASCRIPT",
                      2000,
                      "JQUERY",
                      2000,
                      "REACT JS",
                      2000,
                    ]}
                  />
                </h1>
              </span>
              <div className="profile-options">
                <button className="btn primary-btn">
                  {""}
                  Hire Me{""}
                </button>
                <a
                  href="Rajat's Resume (1) (1)-1.pdf"
                  download="Rajat's Resume (1) (1)-1.pdf"
                >
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
