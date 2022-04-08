import React from "react";
import "./Testimonials.css";
import I1 from "../../assets/Alma.jpg";
import I2 from "../../assets/Ardi.jpg";
import I3 from "../../assets/Endrit.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: I1,
    name: "Alma Bashiq",
    review:
      "Andi is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying our things. Andi on React JS demonstrated good business understanding apart from the programming and user skills.",
  },
  {
    avatar: I2,
    name: "Ardi Gashi",
    review:
      "Andi is an amazing web developer! He has created many dope websites. I have personally worked on a project with him and the experience was amazing as he learned some new things from and even I learned some new things from Andi.",
  },
  {
    avatar: I3,
    name: "Endrit Lajqi",
    review:
      "Andi is a very talented, helpful and a kind person. I can approve of his react skills as he has helped me and a lot of people in the community while they face issues, he is an active blogger and has written really useful articles in web development field.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
