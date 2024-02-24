// SectionTwo.js
import React from 'react';
import '../style/SectionTwo.css';

function SectionTwo({ background, boximage1, boximage2, boximage3, boximage4 }) { 
    return (
        <>
            <img src={background} alt="background" className="sectiontwo-image" />
            <div className="box-container">
                <img className='boximg' src={boximage1} alt="" />
                <img className='boximg' src={boximage2} alt="" />
                <img className='boximg' src={boximage3} alt="" />
                <img className='boximg' src={boximage4} alt="" /> 
            </div>
        </>
    );
}

export default SectionTwo;
