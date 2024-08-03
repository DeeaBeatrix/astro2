import React from 'react';
import { useEffect } from 'react';
import MyHomePageComponent from './HomePageComponent';
import './HomePage.css'
import star from '../../assets/star.svg'

const HomePage = () => {
  // useEffect(() => {

  //   const stars = () => {
  //     let e = document.createElement('img');
  //     e.setAttribute('class', 'star');
  //     e.setAttribute('src', star);
  //     document.body.appendChild(e);
  //     e.style.left = Math.random() * window.innerWidth + 'px';

  //     let size = Math.random() * 12;
  //     let duration = Math.random() * 3;

  //     e.style.fontSize = 12 + size + 'px';
  //     e.style.animationDuration = 3 + duration + 's';

  //   };

  //   const intervalId = setInterval(stars, 100);
  //   return () => clearInterval(intervalId);
  // }, [])

  const radius = 250;

    const houses = [];
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * Math.PI / 180;
        const x = radius + (radius - 10) * Math.cos(angle);
        const y = radius + (radius - 10) * Math.sin(angle);
        houses.push(<line key={i} x1={radius} y1={radius} x2={x} y2={y} stroke="white" />);
    }

    const zodiacSigns = ["♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "♈", "♉", "♊", "♋"];
    const zodiacTexts = zodiacSigns.map((sign, i) => {
        const angle = ((i * 30 + 15) - 90) * Math.PI / 180;
        const x = radius + (radius - 30) * Math.cos(angle);
        const y = radius + (radius - 30) * Math.sin(angle);
        return (
            <text key={i} x={x} y={y} fontSize="20" fill="white" textAnchor="middle" dominantBaseline="middle">
                {sign}
            </text>
        );
    });

  return (
    <div className='homepage'>
      <div className='homepage-container'>
        <h1 className='homepage-title' style={{color: 'white'}}> Bine ai venit pe astroZilnic.ro! </h1>
      </div>
      <div className='chart-container'>
            <svg className='birtchart' width="500" height="500">
                <circle cx={radius} cy={radius} r={radius - 10} fill="none" stroke="white" strokeWidth="2" />
                {houses}
                {zodiacTexts}
            </svg>
      </div>
    </div>
  );
}

export default HomePage;