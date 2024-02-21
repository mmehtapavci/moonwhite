import React from 'react';
import '../style/Section.css';

function Section({ image }) {
    return (
        <div className="section">
            <div className="content">
                <div className="parent">
                    <h2 className='coffeabout' >MoonWhite Coffe </h2>
                    <p className='about' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for their default model text, and a search for their default model text, and a search for search for their default model text, and search for their default model
                    </p>
                </div>
                <img src={image} alt="Coffee" className="section-image" />
            </div>
        </div>
    );
}

export default Section;
