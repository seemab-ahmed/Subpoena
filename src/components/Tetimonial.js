import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Testimonial.css";

function Testimonial() {
  const testimonials = [
    {
      para: "I trust Rob to get the job done where many others cannot. He is diligent, and will continue to follow up on productions and keep relevant deadlines in mind for you, so you can focus on other things in your practice.",
      firstName: "Monica N., Esq",
      // lastName: "Last Name",
      // companyName: "Company Name",
    },
    {
      para: "I have used The Subpoena Service, and my experience was excellent. The company provides full service subpoena support services for both attorney’s and self-represented individuals. They communicated effectively each step of the way and handled the job in a fast and efficient manner.  I would highly recommend their service to anyone seeking a company seeking to issue and subpoena documents in your court matter.",
      firstName: "Law Office James Chau, PC",
      // lastName: "Last Name",
      // companyName: "Law Office",
    },
    // {
    //   para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   firstName: "First Name",
    //   lastName: "Last Name",
    //   companyName: "Company Name",
    // },
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 1000, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      // Responsive breakpoints
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial">
      <div className="container">
        <h2 className="secondry-heading white" data-aos="fade-in">Testimonials</h2>
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                para={testimonial.para}
                firstName={testimonial.firstName}
                lastName={testimonial.lastName ? testimonial.lastName : null}
                companyName={testimonial.companyName ? testimonial.companyName : null}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
