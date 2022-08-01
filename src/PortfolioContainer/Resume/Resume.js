import React from "react";
import "../Resume/Resume.css";
export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="resume-title">
          <span className="resume">Resume</span>
          <h2>Resume</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-name">Summary</h3>
            <div className="resume-item pb-0" id="resume-font">
              <h4>Rajat Chugh</h4>
              <p>
                <em>
                  Innovative and deadline-driven Frontend Developer with 1 year
                  of experience designing and developing user-interface material
                  from initial concept to final, polished deliverable.
                </em>
              </p>
              <p></p>
              <ul>
                <li>Rohtak, Haryana</li>
                <li>(+91) 868 390 2711</li>
                <li className="mail">rajat.chugh270101@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-name">Education</h3>
            <div className="resume-item pb-0">
                <h4>Bachelor of Commerce (B.Com)</h4>
                <h5 className="mb-3">04/2019-07/2022</h5>
                <p>Maharishi Dayanand University, Rohtak</p>
            </div>
            <div className="resume-item pb-0 mt-0">
                <h4>Senior Secondary (XII) - Commerce</h4>
                <h5 className="mb-3">04/2018-03/2019</h5>
                <p>Shri Baba Mastnath Public School, Rohtak</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-name">Professional Experience</h3>
            <div className="resume-item pb-0" id="experience">
              <h4>FRONTEND DEVELOPER</h4>
              <h5>Nov 2021 - June 2022</h5>
              <p className="company">
                <strong>HashStudioz Technologies Private Limited</strong>
              </p>
              <p></p>
              <ul>
                <li>Rezofy's Website</li>
                <p>Designed and maintained few pages of the website.</p>
                <p>
                  Rezofy is a subscription based Internet Booking Engine that
                  offers you everything you need to upgrade your travel business
                  and stay ahead in the industry.
                </p>
                <p><strong>HTML, CSS, JAVASCRIPT and BOOTSTRAP</strong>  are the technologies used in this project.</p>
                <li>HashStudioz's Website</li>
                <p>Designed and maintained pages of the website.</p>
                <p>A Leading Product Development Company which helps <strong>Startups and Enterprises</strong> in Embracing Technologies that bring the highest value. </p>
                <p><strong>HTML, CSS, JAVASCRIPT and BOOTSTRAP</strong> are the technologies used in this project.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
