import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cardbackground from "../assets/images/cardbackground.png";
import titletext from "../assets/images/titletext.svg";
import leftnav from "../assets/images/leftnav.png";
import rightnav from "../assets/images/rightnav.png";
import coverimg from "../assets/images/coverimg.png";
import titleimg from "../assets/images/titleimg.png";
import compbanner from "../assets/images/compbanner.svg";
import bg1 from "../assets/images/bg1.png";
import block1 from "../assets/images/block1.png";
import block2 from "../assets/images/block2.png";
import block3 from "../assets/images/block3.png";
import block4 from "../assets/images/block4.png";
import block5 from "../assets/images/block5.png";
import block6 from "../assets/images/block6.png";
import process1 from "../assets/images/process1.png";
import process2 from "../assets/images/process2.png";
import process3 from "../assets/images/process3.png";
import process4 from "../assets/images/process4.png";
import process5 from "../assets/images/process5.png";
import process6 from "../assets/images/process6.png";
import birthcertificate from "../assets/images/birthcertificate.png";
import cardbg1 from "../assets/images/cardbg1.png";
import cardbg2 from "../assets/images/cardbg2.png";
import cardbg3 from "../assets/images/cardbg3.png";
import cardbg4 from "../assets/images/cardbg4.png";
import cardhead from "../assets/images/cardhead.png";
import downloadicon from "../assets/images/downloadicon.png";
import videoimage from "../assets/images/videoimage.png";
import videocircle from "../assets/images/videocircle.svg";
import footerend from "../assets/images/footerend.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Card
        cardHeight={700}
        backgroundImage={cardbackground}
        style={{ position: "relative" }}
      >
        <img src={titletext} alt="Title" className="title-text" />
        <div className="nav-buttons">
          <button className="nav-button">
            <img src={leftnav} alt="Left Navigation" className="left-nav" />
          </button>
          <button className="nav-button">
            <img src={rightnav} alt="Right Navigation" className="right-nav" />
          </button>
        </div>
      </Card>
      <Card backgroundColor="#f7f7fd" cardHeight={920}>
        <div className="ncard-content">
          <div className="top-ncard">
            <img src={titleimg} alt="Title" className="title-image" />
            <div className="text-container">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vel est eu nibh semper tristique. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Donec pulvinar lectus
                nec orci congue efficitur. Curabitur lobortis sit amet enim
                maximus sodales. Aliquam pharetra ligula sed auctor sagittis.
                Cras non dignissim ligula.
              </p>
            </div>
          </div>
          <div className="bottom-ncard">
            <img src={coverimg} alt="Title" className="cover-image" />
            <div className="cover-card">
              <img src={cardhead} alt="Title" className="card-head" />
              <img src={bg1} alt="Title" className="cover-bg1" />
              <div className="card-text">
                Find out more <a href="https://example.com">here</a>.
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card cardHeight={850}>
        <div className="ncard-content">
          <div className="top-scard">
            <div className="tscard1">
              <div className="hcard-text">
                Services
                <p className="hcard-para">
                  Lorem ipsum doret mapusa corlim danger jasperjust ijasart
                </p>
              </div>
            </div>
            <div className="tscard2">
              <div className="tcard-text">
                Service 01
                <p className="ncard-para">Registered Private/Professionals</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
              <button className="custom-button">Visit Website</button>
            </div>
            <div className="tscard3">
              <img src={cardbg1} alt="Title" className="card-bg1" />
              <div className="ncard-text">
                Service 02
                <p className="ncard-para">Online User Service</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
            </div>
          </div>
          <div className="bottom-scard">
            <div className="bscard1">
              <div className="ncard-text">
                Service 03
                <p className="ncard-para">Free Calculator</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
              <img src={cardbg2} alt="Title" className="card-bg2" />
            </div>
            <div className="bscard2">
              <div className="ncard-text">
                Service 04
                <p className="ncard-para">Check/Track Application Status</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
              <img src={cardbg3} alt="Title" className="card-bg2" />
            </div>
            <div className="bscard3">
              <div className="ncard-text">
                Service 05
                <p className="ncard-para">Officer Login</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
              <img src={cardbg4} alt="Title" className="card-bg2" />
            </div>
          </div>
        </div>
      </Card>
      <Card cardHeight={500} backgroundColor="#EFEFEF">
        <div className="newcard-content">
          <div className="newcard-text">Application Process</div>
          <div className="insidecard-content">
            <img src={process1} alt="Title" className="process-bg" />
            <img src={process2} alt="Title" className="process-bg" />
            <img src={process3} alt="Title" className="process-bg" />
            <img src={process4} alt="Title" className="process-bg" />
            <img src={process5} alt="Title" className="process-bg" />
            <img src={process6} alt="Title" className="process-bg" />
          </div>
        </div>
      </Card>
      <div className="bicard">
        <div className="bicardl-content">
          <div className="bicard-inside">
            <div className="bicard-text">Application Details</div>
            <div className="para-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at fermentum dolor.
            </div>
            <div className="bi-blocks">
              <div className="inside-blocks">
                <img src={block1} alt="Title" />
                <img src={block2} alt="Title" />
                <img src={block3} alt="Title" />
              </div>
              <div className="inside-blocks">
                <img src={block4} alt="Title" />
                <img src={block5} alt="Title" />
                <img src={block6} alt="Title" />
              </div>
            </div>
          </div>
        </div>
        <div className="bicardr-content">
          <img src={birthcertificate} alt="Title" className="b-certificate" />
        </div>
      </div>
      <Card backgroundColor="#f7f7fd" cardHeight={650}>
        <div className="video-container">
          <div className="video-link">
            <div className="link-header">
              <div className="link-htext">Notifications</div>
              <a href="#" className="link-sidetxt">
                View All
              </a>
            </div>
            <div className="link-box">
              <div className="link-text">
                <a href="#">Central Inspection Framework Information</a>
                <div className="link-ptext">25 March, 2023</div>
              </div>
              <a href="#" className="link-icon-wrapper">
                <img src={downloadicon} alt="Title" className="link-icon" />
              </a>
            </div>
            <div className="link-box">
              <div className="link-text">
                <a href="#">Office Orders on Inspection to be carried out</a>
                <div className="link-ptext">06 April, 2023</div>
              </div>
              <a href="#" className="link-icon-wrapper">
                <img src={downloadicon} alt="Title" className="link-icon" />
              </a>
            </div>
            <div className="link-box">
              <div className="link-text">
                <a href="#">
                  Clarification on Delegation of Power under TCP Act 1...
                </a>
                <div className="link-ptext">01 October, 2023</div>
              </div>
              <a href="#" className="link-icon-wrapper">
                <img src={downloadicon} alt="Title" className="link-icon" />
              </a>
            </div>
            <div className="link-box">
              <div className="link-text">
                <a href="#">Central Inspection Framework Information</a>
                <div className="link-ptext">17 December, 2023</div>
              </div>
              <a href="#" className="link-icon-wrapper">
                <img src={downloadicon} alt="Title" className="link-icon" />
              </a>
            </div>
          </div>
          <div className="video-box">
            <div className="video-image">
              <img src={videoimage} alt="Title" />
              <a href="#">
                <img src={videocircle} alt="Title" className="circle" />
              </a>
            </div>
            <div className="video-info">
              Department of Urban Development Operations
              <p className="videoinfo-para">
                Discover the Key Steps in Urban Development Operations: A
                Comprehensive Tutorial
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card cardHeight={150}>
        <img src={compbanner} alt="Title" className="bannercard" />
      </Card>
      <Card cardHeight={300} backgroundColor="#334870">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Department of Urban Development</h3>
            <p>Government of Himachal Pradesh</p>
          </div>
          <div className="footer-column">
            <h3>Government</h3>
            <br></br>
            <ul>
              <li>
                <a href="#">Governor</a>
              </li>
              <li>
                <a href="#">Who Is Who</a>
              </li>
              <li>
                <a href="#">Member of Legislative Assembly</a>
              </li>
              <li>
                <a href="#">Secretaries</a>
              </li>
              <li>
                <a href="#">Head of the Departments</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Departments</h3>
            <br></br>
            <ul>
              <li>
                <a href="#">Departmental Information</a>
              </li>
              <li>
                <a href="#">Map Locator</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Citizen</h3>
            <br></br>
            <ul>
              <li>
                <a href="#">Citizen Charter</a>
              </li>
              <li>
                <a href="#">Official Directory</a>
              </li>
              <li>
                <a href="#">Useful Links</a>
              </li>
              <li>
                <a href="#">Citizen Services</a>
              </li>
              <li>
                <a href="#">Recruitment Results</a>
              </li>
              <li>
                <a href="#">Recruitment Selected</a>
              </li>
              <li>
                <a href="#">Candidates</a>
              </li>
            </ul>
          </div>
        </div>
      </Card>
      <Card cardHeight={90} backgroundColor="#213457">
        <div className="footer-links-wrapper">
          <div className="footer-links-container">
            <a href="#" className="footer-link">
              © 2023 Department of Urban Development. All rights reserved.
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Last Updated: October 23, 2023
            </a>
            <a href="#" className="footer-link">
              Visitor: 6487153
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Landing;
