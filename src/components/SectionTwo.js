// SectionTwo.js
import React from 'react';
import '../style/SectionTwo.css';




function SectionTwo({ background, boximage1,boximage3, }) { 
    return (
        <>
            <img src={background} alt="background" className="sectiontwo-image" />
            <div className="box-container">
                <img className='boximg' src={boximage1} alt="" />
                <div className="box">
                    <p className="box-text">Metin 1</p>
                </div>
                {/* <img className='boximg' src={boximage2} alt="" /> */}
                <img className='boximg' src={boximage3} alt="" />
                {/* <img className='boximg' src={boximage4} alt="" />  */}
                <div className="box">
                    <p className="box-text">Metin 4</p>
                </div>
            </div>
        </>
    );
}

export default SectionTwo;
