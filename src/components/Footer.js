import React from 'react';
import '../style/Footer.css';

function Footer({ backgroundfooter }) {
    return (
        <footer>
            <img src={backgroundfooter} alt="backgroundfooter" className="footer-image" />
        </footer>
    );
}

export default Footer;
