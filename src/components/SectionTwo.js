import React from 'react';
import '../style/SectionTwo.css';

function SectionTwo({ background }) {
    return (
        <div>
            <img src={background} alt="background" className="sectiontwo-image" />
        </div>
    );
}

export default SectionTwo;
