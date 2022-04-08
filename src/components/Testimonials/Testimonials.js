import React from 'react';
import "./Testimonials.css";
import I1 from '../../assets/Alma.jpg';
import I2 from '../../assets/Ardi.jpg';
import I3 from '../../assets/Endrit.jpg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={I1} alt='Alma' />
            <h5>Alma Bashiq</h5>
            <small className='client__review'></small>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Testimonials;