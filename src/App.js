import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <div className="brand-item">
                    <button onclick="openMenu()">
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
            <button className="close-btn" onclick="closeMenu()">X</button>
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
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img src="/image/shirt1.jpg" alt=""/>
                            <div className="product-name">
                                <a href="product.html"></a> Bag New
                            </div>
                            <div className="product-brand">President</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
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
