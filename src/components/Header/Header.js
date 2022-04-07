import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import ME from "../../assets/Me_2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Andi Hyseni</h1>
        <h5 className="text-light">React Developer</h5>
        <HeaderButton />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
