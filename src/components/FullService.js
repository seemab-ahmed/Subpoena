import React from "react";
import '../css/full-service.css';
import serviceImage from '../assets/service-img.png'; 

function FullService() {
  return (
    <section className="service">
      <div className="container">
        <div className="service-img-wrapper">
          <img src={serviceImage} alt="service-img" />
        </div>
        <div className="service-content">
          <h2 className="secondry-heading">Our Full-Service Guarantee</h2>
          <p className="default-text">
            We are so confident in our ability to prepare and effect service of
            valid subpoenas that we are willing to back witness response with
            our guarantee. When it comes to our full-service preparation of
            subpoenas for records, you do not pay until the witness produces
            response. We waive any preparation fees for subpoenas where no
            response is received, and we never charge to amend subpoenas if
            there is pushback from a witness.
          </p>
          <p className="default-text text-mid">You only pay when the witness / deponent responds.</p>
          <p className="default-text">You never pay fees for us to amend subpoenas.</p>
        </div>
      </div>
    </section>
  );
}

export default FullService;
