import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import './Header.css';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andi-hyseni-639021207/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/AndiHyseni/react-portfolio" target="_blank"><FaGithub /></a>
    </div>
  )
};

export default HeaderSocials;