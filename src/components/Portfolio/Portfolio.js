import React from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import IMG1 from "../../assets/Clothes.PNG";
import IMG2 from "../../assets/Meals.PNG";
import IMG3 from "../../assets/Expense.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Premium Clothes",
    github: "https://github.com/AndiHyseni/PremClothes",
  },
  {
    id: 2,
    image: IMG2,
    title: "Order Food",
    github: "https://github.com/AndiHyseni/Meals",
  },

  {
    id: 3,
    image: IMG3,
    title: "Expenses",
    github: "https://github.com/AndiHyseni/ExpenseForm",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  <AiFillGithub /> GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
