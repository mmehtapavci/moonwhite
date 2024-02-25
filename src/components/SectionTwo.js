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
                    <p className="box-text">
                        <h3 className='title-promotion'>KAHVELER</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate in vitae cupiditate. Id veniam ducimus cum sapiente totam unde! </p>
                    </p>
                </div>
                {/* <img className='boximg' src={boximage2} alt="" /> */}
                <img className='boximg' src={boximage3} alt="" />
                {/* <img className='boximg' src={boximage4} alt="" />  */}
                <div className="box">
                    <p className="box-text">
                        <h3 className='title-promotion'>PASTALAR</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate in vitae cupiditate. Id veniam ducimus cum sapiente totam unde! </p>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SectionTwo;
