import React from 'react';
import heroImg from '../../images/hero-img.svg';
import { TestComponent } from "teamuphub-ui";

import './Landing.scss';

const Landing = () => {
  return (
    <div className='[ welcomeblock ]'>
      <div className='[ welcomeblock__container ][ welcomeblock__container--padding-top ]'>
        <h1 className='[ welcomeblock__text ][ welcomeblock__text--font-size ]'>
          <TestComponent/>
          We make it easier for
          <br /> people to
          <span className='[ welcomeblock__text--highlight ]'>
            <br /> achieve their dreams
          </span>{' '}
        </h1>
        <h3 className='[ welcomeblock__text ][ welcomeblock__text--margin-top ]'>
          Great Things are created together!
          <br />
          <span className='[ welcomeblock__text--highlight ]'>
            Our platform connects those who want to make a difference together
          </span>
        </h3>
      </div>
      <div className='[ welcomeblock__container ][ welcomeblock__container--position-left ] '>
        <img className='[ welcomeblock__image ]' src={heroImg} alt='Landing Picture' />
      </div>
    </div>
  );
};

export default Landing;
