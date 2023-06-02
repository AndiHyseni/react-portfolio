import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Job Related Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Verbal communication</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing communication (email, official papers)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Formal communication (clients meetings, important meetings)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team work</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Learning concepts and applying them to other problems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flexible in work</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web portals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Help desk</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous support and evolution</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Consistency</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and Visuals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Promotion</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
