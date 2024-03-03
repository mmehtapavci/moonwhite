import React from 'react';
import '../style/Sectiontree.css';

function Sectiontree() {
    // Örnek ürün listesi
    const products = [
        { id: 1, name: "Ürün 1", price: 10 },
        { id: 2, name: "Ürün 2", price: 15 },
        { id: 3, name: "Ürün 3", price: 20 },
        { id: 4, name: "Ürün 4", price: 25 },
        { id: 5, name: "Ürün 5", price: 30 },
        { id: 6, name: "Ürün 6", price: 35 }
    ];

    return (
        <div className="products">
            <h1>Ürünler</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price} TL
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sectiontree;
