import React from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import IMG1 from "../../assets/29.PNG";
import IMG2 from "../../assets/KosovoWood.PNG";
import IMG3 from "../../assets/Boleros.PNG";
import { RiExternalLinkLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portal News",
    position: "Sole Developer",
    techUsed: "ASP .Net Core, React, MSSQL, Typescript, Javascript",
    decription:
      "Portal News aims to develop a web application that can provide daily news to people. In this project, the news can be created and changed by the admin, they are also divided into categories and can be filtered based on categories and tags. The admin can see various statistics about the site, such as the number of news, the number of users, the number of views for news, number of reactions, who made those reactions, etc.",
    github: "https://github.com/AndiHyseni/NewsPortal-Back-end",
    github2: "https://github.com/AndiHyseni/portal-news",
  },
  {
    id: 2,
    image: IMG2,
    title: "Kosovo Wood",
    position: "Team member",
    techUsed: "ASP .Net Core MVC, MSSQL, Javascript",
    decription:
      "Kosova Wood is a software system that manages the management of the sale of goods by businesses that have one or more points of sale, or want to sell and display their products online and have them all integrated in a centralized platform . The main objective of this project was to introduce all companies to the website, put their products on sale and the possibility of purchasing them through the website.",
    link: "https://kosovowood.checkoutstore.co.uk/storeindex",
  },
  {
    id: 3,
    image: IMG3,
    title: "Boleros Pizzeria",
    position: "Team member",
    techUsed: "ASP .Net Core MVC, MSSQL, Javascript",
    decription:
      "Boleros Pizzeria is a software system that manages the management of food sales by businesses that have one or more points of sale, or want to sell and display their products online and have them all integrated in a centralized platform. One of the problems we encountered was to allow the admin to set the addresses and post codes where the order should be sent, as well as the possibility for customers to take it away.",
    link: "https://bolerospizzeria.co.uk/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            position,
            techUsed,
            decription,
            github,
            github2,
            link,
          }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img className="projectsImage" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{position}</h5>
                <h5>
                  <u style={{ textDecoration: "revert" }}>Technologies Used:</u>{" "}
                  {techUsed}
                </h5>
                <div className="projectDesc">
                  <p style={{ textAlign: "justify", marginBottom: "20px" }}>
                    {decription}
                  </p>
                  <div className="portfolio__item-cta">
                    {github && (
                      <a href={github} className="btn" target="_blank">
                        <AiFillGithub /> GitHub
                      </a>
                    )}
                    {github2 && (
                      <a href={github2} className="btn" target="_blank">
                        <AiFillGithub /> GitHub
                      </a>
                    )}
                    {link && (
                      <a href={link} className="btn" target="_blank">
                        <RiExternalLinkLine /> Visit
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
