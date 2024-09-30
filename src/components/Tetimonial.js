import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Testimonial.css";

function Testimonial() {
  const testimonials = [
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      firstName: "First Name",
      lastName: "Last Name",
      companyName: "Company Name",
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      firstName: "First Name",
      lastName: "Last Name",
      companyName: "Company Name",
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      firstName: "First Name",
      lastName: "Last Name",
      companyName: "Company Name",
    },
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
                lastName={testimonial.lastName}
                companyName={testimonial.companyName}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
