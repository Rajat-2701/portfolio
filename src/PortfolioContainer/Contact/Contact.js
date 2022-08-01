import React from "react";
import "../Contact/Contact.css";
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-title">
          <span className="contact-me">Contact Me</span>
          <h2>Contact Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            distinctio corrupti.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="social-box">
                  <i className="fas fa-share-alt" id="share"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="fa-brands fa-facebook"></i>
                    </a>{" "}
                    <a href="#" className="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>{" "}
                    <a href="#" className="google-plus">
                      <i className="fa-brands fa-skype"></i>
                    </a>{" "}
                    <a href="#" className="linkedin">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info mt-4">
                    <i className="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <a href="mailto:rajat.chugh270101@gmail.com">rajat.chugh270101@gmail.com</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info mt-4">
                    <i className="fas fa-phone"></i>
                    <h3>Call Me</h3>
                    <a href="tel: 868 390 2711">(+91) 868 390 2711</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="" onSubmit={handleSubmit} method="post" role='form' className='form-fill'>
                <div className="row">
                    <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required=""/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required=""/>
                </div>
                <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="send">Send Message</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
