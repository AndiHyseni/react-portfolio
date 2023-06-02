import React from "react";
import "./Testimonials.css";
import { BsLinkedin } from "react-icons/bs";
import I1 from "../../assets/Joni.PNG";
import I2 from "../../assets/Berati.PNG";
import I3 from "../../assets/Albioni.PNG";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: I1,
    name: "Jon Bala",
    pos: "Frontend Engineer at Trudo",
    linkedInLink: "https://www.linkedin.com/in/jonbala/",
    review:
      "Andi is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying new things. Andi as software developer demonstrated good business understanding apart from the programming and user skills.",
  },
  {
    avatar: I2,
    name: "Berat Latifi",
    pos: "Software Developer at Comitas",
    linkedInLink: "https://www.linkedin.com/in/berat-latifi-5b3a89222/",
    review:
      "Andi is an amazing web developer! He has created many dope websites. I have personally worked on a project with him and the experience was amazing as he learned some new things from and even I learned some new things from Andi.",
  },
  {
    avatar: I3,
    name: "Albion Ramadani",
    pos: "Software Developer at Appdec",
    linkedInLink: "https://www.linkedin.com/in/albion-ramadani-9aa705242/",
    review:
      "Andi is a very talented, helpful and a kind person. I can approve of his web development skills as he has helped me and a lot of people in the community while they face issues.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, pos, linkedInLink, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <a href={linkedInLink} target="_blank">
                <BsLinkedin />
              </a>
              <h3>{pos}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
