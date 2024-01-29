import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            ✅ ⭐️ Freelancer on UpWork specializing in Mobile/Web Application testing, Cross-Browser Testing, API/REST, SQA Automated Testing, Web Content Accessibility Guidelines (WCAG), Web Performance Guidelines (WPG), TestPlan/Case Documentation, Usability Testing, Product Requirements, & more. 🤷‍♂️
              <br />
              <br />I work with successful businesses that:
              <i>
              <br />
                <b className="purple"> ✅ Know that poor quality increases costs. </b>
                <br />
                <b className="purple"> ✅ Know that good quality increases profitability </b>
                <br />
                <b className="purple"> ✅ Know dissatisfied customers are more vocal in their criticisms of a company with quality problems </b>
              </i>
              <br />
              <br />
              My services include:
              {/* <i>
                <b className="purple">  <br />
                  • Website/Web Application Testing, WordPress, Sitecore, Salesforce, Shopify eCommerce, WooCommerce </b> 
                <b className="purple"> <br />
                  • Enterprise (Stand Alone) Application Testing.</b> 
                <b className="purple">  <br />
                  • Mobile App Testing: Ad-Hoc, Sanity/Smoke, Functional, Regression, Integration,
                  Installation, Licensing, Cross Compatibility on real device lab: Apple - iPhone 11, XS, XR, X, 8, 7, 7+, 6S, 6S+, 5S, iPad Air 1/2, iPad Pro, Android - Samsung Galaxy S8, S7, S6, S5, S4, Google Pixel 1 & 2, Galaxy Tab 4 (10-inch version), Google Nexus 9 </b>
                  <b className="purple">  <br />
                  • Test plan Design & Development </b> 
                  <b className="purple">  <br />
                  • Automated Tests: Selenium IDE, Selenium WebDriver, Python, Java </b> 
                  <b className="purple">  <br />
                  • Manual Software Testing Skills: Black Box, Regression, Usability/UX, Cross Browser
                    compatibility, Ad-Hoc, Smoke, Functional, and Unit Testing.</b> 
                  <b className="purple">  <br />
                  • API Testing Skills: PostMan, SoapUI.</b> 
                  <b className="purple">  <br />
                  • Performance Testing Skills: JMeter, LoadRunner</b> 
                  <b className="purple">  <br />
                  • Section 508 / WCAG 2.0/2.1 AA ACCESSIBILITY TESTING</b> 
                  <b className="purple">  <br />
                  • JIRA Set up and Configuration, Workflows, Screens, Permissions, Migrations</b> 
                  
              </i> */}
              <div>
                <ul className="bullet-list">
                  <li> Website/Web Application Testing, WordPress, Sitecore, Salesforce, Shopify eCommerce, WooCommerce</li>
                  <li> Enterprise (Stand Alone) Application Testing.</li>
                  <li> Mobile App Testing: Ad-Hoc, Sanity/Smoke, Functional, Regression, Integration,
                  Installation, Licensing, Cross Compatibility on real device lab: Apple - iPhone 11, XS, XR, X, 8, 7, 7+, 6S, 6S+, 5S, iPad Air 1/2, iPad Pro, Android - Samsung Galaxy S8, S7, S6, S5, S4, Google Pixel 1 & 2, Galaxy Tab 4 (10-inch version), Google Nexus 9</li>
                  <li> Test plan Design & Development</li>
                  <li> Automated Tests: Selenium IDE, Selenium WebDriver, Python, Java </li>
                  <li> Manual Software Testing Skills: Black Box, Regression, Usability/UX, Cross Browser
                         compatibility, Ad-Hoc, Smoke, Functional, and Unit Testing.</li>
                  <li> API Testing Skills: PostMan, SoapUI.</li>
                  <li> Performance Testing Skills: JMeter, LoadRunner</li>
                  <li> Section 508 / WCAG 2.0/2.1 AA ACCESSIBILITY TESTING</li>
                  <li> JIRA Set up and Configuration, Workflows, Screens, Permissions, Migrations</li>
              </ul>
            </div>

              <br />
              <br />
              Currently Featured as the Freelancer in the IT and Networking Category on UpWork, I make sure every experience is simple, frictionless and fast.
              with <b className="purple">Node.js</b> 
              <i> <br /><br />
                <b>Left unchecked, software bugs wreak havoc on your user experience, blocking customers from making a purchase or seeing important information, or frustrating them enough that they give up trying to buy the merchandise altogether. </b>
              </i>
              <i> <br /><br />
                <b>By intuitively gathering, interpreting and understand your requirements, I will create and develop creative Test Strategies using a vast variety of techniques and tools that will help you get the 🌟BEST REVIEWS!🌟 from your customers. </b>
              </i>
              <i> <br /><br />
                <b>
                 I pride myself on my ability to help companies like YOURS create rock-solid reliable digital products free of bugs 🐞🐞🐞. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
