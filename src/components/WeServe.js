import React from "react";
import '../css/full-service.css';
import serveImage from '../assets/weserve-img.svg'; 

function WeServe() {
  return (
    <section className="service">
      <div className="container">
        <div className="service-content" data-aos="fade-right">
          <h2 className="secondry-heading">Who We Serve</h2>
          <p className="default-text">
            We help California attorneys feel confident in their issuance of
            subpoenas, whether deposition subpoenas for production of business
            records, or any other type of deposition subpoena / subpoenas to
            appear at trial. We manage the process from preparation, to
            issuance, to collecting and distributing relevant records when
            applicable, and assist in keeping track of the timelines involved.
          </p>
          <p className="default-text text-mid">
            We continue to challenge the status quo and harness innovation to
            move faster and create value for our clients, developing new
            procedures and workflows to meet our client’s needs.
          </p>
        </div>
        <div className="service-img-wrapper" data-aos="fade-left">
          <img src={serveImage} alt="service-img" />
        </div>
      </div>
    </section>
  );
}

export default WeServe;
