import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navigationLogo from '../../images/nav-logo.svg';

import './Navigation.scss';

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='[ navigation ]'>
      <div className='[ navigation__logo ]'>
        <Link to='/'>
          <img src={navigationLogo} alt='Company logo' />
        </Link>
      </div>
      <div className='menu-icon' onClick={handleClicked}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? '[ navigation__menu ] active' : '[ navigation__menu ]'}>
        <Link to='/product'>
          <li className='[ navigation__link ]'> Product</li>
        </Link>
        <Link to='/about'>
          <li className='[ navigation__link ]'>About Us</li>
        </Link>
        <Link to='contact'>
          <li className='[ navigation__link ]'>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
