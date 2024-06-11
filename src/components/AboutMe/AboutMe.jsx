import React from "react";
import './AboutMe.css'
import cas from '../../assets/cas.jpg'
import javascript from '../../assets/javascript.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import scrum from '../../assets/scrum.svg'


const AboutMe = () => {
    return (
        <div id='about' className='about-section'>
            <h1 className='about-title'> Cine sunt eu? </h1>
            <img id='profile-pic' src={cas} alt="Profile Picture" />
            <p className="about-info"> Ne-am născut într-un anumit moment, într-un anumit loc şi, la fel ca vinul obţinut din recolta unui anumit an, şi noi păstrăm calităţile anului şi sezonului în care ne-am născut. Astrologia nu pretinde altceva. </p>
            <div className='extra-info'>
                <div className="extra">
                    <img src={scrum} alt="diploma" />
                    <p>Scrum</p>
                </div>
                <div className="extra">
                    <img src={javascript} alt="javascript" />
                    <p>JS</p>
                </div>
                <div className="extra">
                    <img src={html} alt="html" />
                    <p>HTML</p>
                </div>
                <div className="extra">
                    <img src={css} alt="css" />
                    <p>CSS</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;