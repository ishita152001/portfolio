import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/ishita-jain15/">
                <i className="fa fa-linkedin-square"></i>
              </a>
          
              <a href="https://github.com/ishita152001">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'm <span className="highlighted-text">Ishita</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    1000,
                    "MERN Stack Dev ",
                    3000,
                    "QA Engineer ",
                    3000,
                    "Programmer",
                    3000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              An engineering student with knack of building web applications
              using MERN stack
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me{" "}
            </button>
            <a
              href="https://drive.google.com/file/d/1Ym830yC1qlWa74rN7REqBnn22zUA7Ixu/view?usp=sharing"
              target="__blank"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
