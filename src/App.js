import React from 'react';
import data from './data';
import './App.css';

function App() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    }
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    return (
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <div className="brand-item">
                        <button onClick={openMenu}>
                            &#9776;
                    </button>
                        <a href="index.html">Rahim Store</a>
                    </div>
                </div>
                <div className="header-item">
                    <a href="cart.html">cart</a>
                    <a href="sigin.html">Sign</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="close-btn" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html">Bag</a>
                    </li>
                    <li>
                        <a href="index.html">Man Fashion</a>
                    </li>
                    <li>
                        <a href="index.html">Women Fashion</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        {
                            data.products.map(product =>
                                <li>
                                    <div className="product">
                                        <img src={product.image} alt="" />
                                        <div className="product-name">
                                            <a href="product.html">{product.name}</a>
                                        </div>
                                        <div className="product-brand">{product.brand}</div>
                                        <div className="product-price">${product.price}</div>
                                        <div className="product-exDate">{product.exDate}</div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </main>
            <footer className="footer">
                developed by Atiqur Rahman
        </footer>
        </div>
    );
}

export default App;
