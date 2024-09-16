import React from "react";
import "../css/MakeEasy.css";
import StepCard from './StepCard';
import coordinateIcon from '../assets/coordinate.png'; 
import issueIcon from '../assets/issue.svg'; 
import trackIcon from '../assets/track.svg'; 
import responsiveIcon from '../assets/responsive.svg'; 

function MakeEasy() {
    const cardDataArray = [
        {
          imgSrc: coordinateIcon,
          title: "Coordinate the Project",
          content: "Whether you submit your request to us through email, the contact form on our website, or our online portal, we will work with you to define the scope of your project and execute on your plan.",
          readLink: "/"
        },
        {
          imgSrc: issueIcon,
          title: "Issue the Subpoenas",
          content: "Once a plan is in place for the subpoenas needed, we will prepare the subpoenas to be executed by the attorneys and issued.",
          readLink: "/"
        },
        {
          imgSrc: trackIcon,
          title: "We Track the Progress",
          content: "From service on consumers of notices of privacy rights and service of witness deponents to tracking hold periods and statutory deadlines as well as obtaining proofs of service, we do it all. Our friendly reminders will apprise you of the progress of your work orders, and a live person will always be at your disposal to answer your questions.",
          readLink: "/"
        },
        {
          imgSrc: responsiveIcon,
          title: "Responsive Production",
          content: "As registered and duly licensed and bonded professional photocopiers, we are able to serve as deposition officer and hold responsive production from witnesses until the date of release. We follow-up with deponents, and are sensitive about the deadlines to seek remedy for failure of a deponent to comply. We understand the laws surrounding responsive production, and take them very seriously.",
          readLink: "/project-delivery"
        }
      ];
    
  return (
    <section className="make-easy">
      <div className="container">
        <h2 className="secondry-heading">We Make Subpoenas Easy</h2>
        <p className="default-text">
          Our dedicated account executive and customer service teams listen to
          and understand your needs. Our goal: eliminate the headache of
          preparing and serving subpoenas of all types, including advancing
          fees, following-up about record production, and obtaining applicable
          declarations of witnesses and custodians. We work to reduce the time
          you spend tracking, managing, and obtaining responsive production and
          effecting service of subpoenas. No job is too small or too big. We
          have the experience to handle projects ranging from a single
          deposition subpoena to issuing and managing the deadlines and
          productions of dozens of issues at the same time.
        </p>
        <p className="default-text easy-tp">
          We are not just another subpoena service; we are The Subpoenas
          Service.
        </p>
        <div className="subpoena-steps">
          {cardDataArray.map((cardData, index) => (
            <StepCard
              key={index}
              imgSrc={cardData.imgSrc}
              title={cardData.title}
              content={cardData.content}
              readLink={cardData.readLink}
            />
          ))}
        </div>
        <p className="default-text easy-btm">
        Got specific questions or like to learn more?
        </p>
        <div className="btn-grp">
        <a href="/" className="primary-btn btn-blue">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default MakeEasy;
