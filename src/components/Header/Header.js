import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import ME from "../../assets/Profil-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Andi Hyseni</h1>
        <h5 className="text-light">Software Developer</h5>
        <HeaderButton />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className="me_2" />
        </div>
        <div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
