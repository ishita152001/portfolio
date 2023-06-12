import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreens(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>
            {props.heading ? (
              props.link ? (
                <a className="projectLinks" href={props.link}>
                  {props.heading} (Link)
                </a>
              ) : (
                props.heading
              )
            ) : (
              ""
            )}
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    // { label: "Achievements", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "C++", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Crpto Trail",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
      "It is a tracker with full responsive functionality and keep the track of trending cryptocurrencies existing across the globe",
      subHeading: "Technologies Used: React JS, Material UI, Chart JS, Firebase",
      link: "https://cryptoo-trail.netlify.app/",
    },
    {
      title: "Potato Disease Classifier",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
      "It is a model that detect the disease developed in a potato plant while growing",
      subHeading: "Technologies Used: React JS, Tensorflow, CNN, Fast API",
      link: "https://github.com/ishita152001/leaf-project",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Guru Gobind Singh Indraprastha University, Dwarka"}
        subHeading={"BACHELOR OF TECHNOLOGY(COMPUTER SCIENCE) - 9.3 CGPA"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Holy Cross School"}
        subHeading={"Class XII - 81%"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Holy Cross School"}
        subHeading={"Class X - 9 CGPA"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"7techies Pvt ltd. Software Organization"}
          subHeading={"PROJECT ASSOCIATE INTERN"}
          fromDate={"August 2021"}
          toDate={"September 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <ul>
            <li>
              <span className="resume-description-text">
                Worked closely on User Acceptance Testing
              </span>
            </li>
            <li>
              <span className="resume-description-text">
                Tested multiple Government websites and worked on WordPress
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Shotlisted"}
          subHeading={"DATA ANALYST INTERN"}
          fromDate={"April 2021"}
          toDate={"June 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <ul>
            <li>
              <span className="resume-description-text">
                Analyzed different International university websites and
                visualized the data using python
              </span>
            </li>
            <li>
              <span className="resume-description-text">
                Worked on web scrapping part using Python libraries & creation on the spring API
              </span>
            </li>
            <li>
              <span className="resume-description-text">
                Created responsive micro services of the website
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
    </div>,

    /* Achievements */
    // <div className="resume-screen-container" key="achievements">
    //   <ResumeHeading heading="1777 ratings on codechef and 5 ⭐ coder at hackerrank" />
    //   <ResumeHeading heading="Won 3rd Prize at WIEHACK 3.0 (International Level Hackathon)" />
    //   <ResumeHeading heading="Won 3rd prize at Prepbytes Build it up Hackathon" />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
