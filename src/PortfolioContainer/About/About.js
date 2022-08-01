import React from "react";
import "../About/About.css";
import CountUp from "react-countup";
import ProgressBar from "@ramonak/react-progress-bar";
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-title">
          <span className="about">About Me</span>
          <h2>About Me</h2>
          <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p>
        </div>
        <div className="row">
          <div className="image col-lg-4 d-flex justify-content-center align-items-stretch justify-content-lg-start"></div>
          <div className="col-lg-8">
            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Name:</strong> <span>Rajat Chugh</span>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>{" "}
                      <strong>Phone:</strong>
                      <a href="tel: 868 390 2711">+91 868 390 2711</a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>City:</strong> <span>Rohtak, Haryana</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Age:</strong>
                      <span>21 years</span>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Email:</strong>
                      <a href="mailTo: rajat.chugh270101@gmail.com">
                        rajatchugh270101@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-n4">
                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="fas fa-smile"></i>
                    <CountUp end={3} duration={3} />
                    <p>
                      <strong>Happy Clients</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i
                      className="fa-solid fa-book"
                      style={{ color: "#8a1ac2" }}
                    ></i>
                    <CountUp end={5} duration={3} />
                    <p>
                      <strong>Projects</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i
                      className="fas fa-clock"
                      style={{ color: "#2cbdee" }}
                    ></i>
                    <CountUp end={1} duration={3} />
                    <p>
                      <strong>Years of experience</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i
                      className="fas fa-award"
                      style={{ color: "#ffb727" }}
                    ></i>
                    <CountUp end={5} duration={3} />
                    <p>
                      <strong>Awards</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-content mt-5 ps-lg-4">
            <span class="skill">HTML <i className="value">90%</i></span>
              <div className="progress-skill">
                <ProgressBar completed={90} height="15px"/>
              </div>
            </div>
            <div className="skills-content mt-5 ps-lg-4">
            <span class="skill">CSS <i className="value">80%</i></span>
              <div className="progress-skill">
                <ProgressBar completed={80} height="15px" bgColor="#ffb600"/>
              </div>
            </div>
            <div className="skills-content mt-5 ps-lg-4">
            <span class="skill">BOOTSTRAP <i className="value">90%</i></span>
              <div className="progress-skill">
                <ProgressBar completed={90} height="15px" bgColor="red"/>
              </div>
            </div>
            <div className="skills-content mt-5 ps-lg-4">
            <span class="skill">JAVASCRIPT <i className="value">70%</i></span>
              <div className="progress-skill">
                <ProgressBar completed={70} height="15px" bgColor="#3455eb"/>
              </div>
            </div>
            <div className="skills-content mt-5 ps-lg-4">
            <span class="skill">REACT JS <i className="value">20%</i></span>
              <div className="progress-skill">
                <ProgressBar completed={20} height="15px" bgColor="#c334eb"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
