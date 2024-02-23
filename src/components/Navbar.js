import React from 'react';
import '../style/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" >MoonWhite</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" >Anasayfa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Hakkımızda </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >İletişim </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
