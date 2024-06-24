import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cardbackground from "../assets/images/cardbackground.png";
import coverimg from "../assets/images/coverimg.png";
import titleimg from "../assets/images/titleimg.png";
import bg1 from "../assets/images/bg1.png";
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
      <Card
        backgroundImage={cardbackground}
        // title="Featured Content"
        // description="This is a featured content card with a background image."
      />
      <Card>
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
      <Card>
        <div className="ncard-content">
          <div className="top-scard">
            <div className="tscard1">
            <div className="hcard-text">
                Services
                <p className="hcard-para">Lorem ipsum doret mapusa corlim danger jasperjust ijasart</p>
              </div>
            </div>
            <div className="tscard2">
            <div className="tcard-text">
                Service 01
                <p className="ncard-para">Registered Private/Professionals</p>
                Lorem ipsum doret mapusa corlim danger jasperjust ijasart
              </div>
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
      <div className="main-content">
        <h2>Welcome to Our Website</h2>
        <p>This is the landing page content.</p>
      </div>
    </div>
  );
};

export default Landing;
