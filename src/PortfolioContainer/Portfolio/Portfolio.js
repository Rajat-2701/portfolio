import React, { useState } from "react";
import "../Portfolio/Portfolio.css";
import portfolio1 from "../Portfolio/portfolio-1.jpg";
import portfolio2 from "../Portfolio/portfolio-2.jpg";
import portfolio3 from "../Portfolio/portfolio-3.jpg";
import portfolio4 from "../Portfolio/portfolio-4.jpg";
import portfolio5 from "../Portfolio/portfolio-5.jpg";
import portfolio6 from "../Portfolio/portfolio-6.jpg";
import portfolio7 from "../Portfolio/portfolio-7.jpg";
import portfolio8 from "../Portfolio/portfolio-8.jpg";
import portfolio9 from "../Portfolio/portfolio-9.jpg";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
export default function Portfolio() {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-title">
          <span className="portfolio">Portfolio</span>
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            dolores alias!
          </p>
        </div>
        <CNav variant="pills" role="tablist" className="tablist">
          <CNavItem>
            <CNavLink
              href="#all"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              All
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#app"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              App
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#card"
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Card
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="#web"
              active={activeKey === 4}
              onClick={() => setActiveKey(4)}
            >
              Web
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane
            role="tabpanel"
            aria-labelledby="home-tab"
            visible={activeKey === 1}
          >
            <div className="portfolio-container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio1}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App1</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio2}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web1</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio3}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App3</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio4}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card2</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio5}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web2</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio6}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App2</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio7}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card1</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio8}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card3</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio9}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web3</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="profile-tab"
            visible={activeKey === 2}
          >
            <div className="portfolio-container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio1}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App1</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio6}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App2</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio3}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>App3</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 3}
          >
            <div className="portfolio-container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio7}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card1</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio4}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card2</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio8}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Card3</h4>
                      <p>Card</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 4}
          >
            <div className="portfolio-container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio2}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web1</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio9}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web3</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="portfolio-data">
                    <div className="port-image">
                      <img
                        src={portfolio5}
                        className="img-fluid w-100 portfolio-design"
                        style={{ height: "250px" }}
                        alt="abc"
                        srcset=""
                      />
                    </div>
                    <div className="portfolio-content">
                      <h4>Web2</h4>
                      <p>Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
        </CTabContent>
      </div>
    </section>
  );
}
