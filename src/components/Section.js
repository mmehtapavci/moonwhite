import React from 'react';
import '../style/Section.css';

function Section({ image, text }) {
    return (
        <div className="section">
            <img src={image} alt="Coffee" className="section-image" />
        </div>
    );
}

export default Section;
