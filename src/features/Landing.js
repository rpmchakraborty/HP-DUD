import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cardbackground from "../assets/images/cardbackground.png";
import coverimg from "../assets/images/coverimg.png";
import titleimg from "../assets/images/titleimg.png";
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
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Card cardHeight={800} backgroundImage={cardbackground} />
      <Card backgroundColor="#f7f7fd" cardHeight={800}>
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
      <Card cardHeight={800}>
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

      <div className="main-content">
        <h2>Welcome to Our Website</h2>
        <p>This is the landing page content.</p>
      </div>
    </div>
  );
};

export default Landing;
