import React from 'react';
import CV from "../../assets/Andi Hyseni CV.pdf"

const HeaderButton = () => {
  return (
    <div className='HeaderButton'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
};

export default HeaderButton;