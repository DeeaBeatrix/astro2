import { useState } from "react";
import zodiacList from "./Tabs/Tabs.js";
import '../../../src/App.css';

const Horoscope = () => {
  let [currentSign, setCurrentSign] = useState(0); //track of current sign
  let [signs, setSigns] = useState(zodiacList);

  const signChange = (e) => {
    const buttonValue = parseInt(e.target.getAttribute('value'));
    setCurrentSign(buttonValue);
  };

  return (
    <div>
      <div className='button-container'>
        {signs.map((sign, index) => (
            <button key={sign.title} 
            value={index} 
            onClick={signChange}
            className={`button-text button-text-${index+1} ${index === currentSign ? 'active-button' : ''}`}> 
            {sign.title} 
            </button>
        ))}
      </div>
      <div className='sign-content'>
        <h2 style={{color: 'white'}}>{signs[currentSign].title}</h2>
        <img src={signs[currentSign].image} alt={signs[currentSign].alt} className='sign-image' />
        <p className='sign-text' style={{fontSize: '14px'}}>{signs[currentSign].text}</p>
      </div>
    </div>
  );
};

export default Horoscope;