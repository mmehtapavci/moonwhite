import React from 'react';
import '../style/SectionTwo.css';

function SectionTwo({ background }) {
    return (
        <>
            <img src={background} alt="background" className="sectiontwo-image" />
            <div className="box-container">
                <div className="box">eee</div>
                <div className="box">rrr</div>
                <div className="box">ttt</div>
                <div className="box">yyy</div>
            </div>  
        </>
    );
}

export default SectionTwo;
