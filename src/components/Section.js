import React from 'react';
import '../style/Section.css';

function Section({ image }) {
    return (
        <div className="section image">
            <img src={image} alt="Coffe" />
        </div>
    );
}

export default Section;
