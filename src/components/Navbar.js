import React from 'react';
import '../style/Navbar.css';

function Navbar() {
    // Ürünler bağlantısına tıklandığında Sectiontree bileşenine gitmesini sağlayan fonksiyon
    const goToProducts = () => {
        // Sectiontree bileşenine geçiş yapmak için gerekli kodlar
        // Örnek: window.location.href = '/products';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" >MoonWhite</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={goToProducts}>Ürünler </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Giriş Yap </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Sepet </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
