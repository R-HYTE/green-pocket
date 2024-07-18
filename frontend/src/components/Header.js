import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Header() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            <span className="orange-text">Green</span>
            <span className="green-text">Pocket</span>
          </h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart" className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span>{getTotalItems()}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
