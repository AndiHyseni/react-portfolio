import React from 'react';
import "./Services.css";
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="service">
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom-tailored design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative solution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Quality over quantity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Streamlined process</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Transparent collaboration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Delivery on time</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web portals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Help desk</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuous support and evolution</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consistency</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and Visuals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Promotion</p>
            </li>
          </ul>
        </article>
      </div> 
    </section>
  )
};

export default Services;