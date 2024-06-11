import React from 'react';
import { useEffect } from 'react';
import MyHomePageComponent from './HomePageComponent';
import './HomePage.css'
import star from '../../assets/star.svg'

const HomePage = () => {
  useEffect(() => {

    const stars = () => {
      let e = document.createElement('img');
      e.setAttribute('class', 'star');
      e.setAttribute('src', star);
      document.body.appendChild(e);
      e.style.left = Math.random() * window.innerWidth + 'px';

      let size = Math.random() * 12;
      let duration = Math.random() * 3;

      e.style.fontSize = 12 + size + 'px';
      e.style.animationDuration = 3 + duration + 's';

    };

    const intervalId = setInterval(stars, 100);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='homepage-container'>
      <h1 className='homepage-title'> Welcome to my site! </h1>
      <div className='stars-container'>
        <p className='home-page-subtitle'> Cosmosul este un trup viu, iar noi suntem părţi ale sale. Soarele este o inimă uriaşă, iar fiecare fior al său e resimţit până în cele mai mici vene ale noastre. Luna este un mare centru nervos, care ne face întotdeauna să fremătăm. Cine cunoaşte puterea pe care o au asupra noastră Saturn sau Venus? Aceasta este o putere vitală, ale cărei unde ne străbat în permanenţă. </p>
      </div>
    </div>
  );
}

export default HomePage;