import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            <span className="orange-text">Green</span>
            <span className="green-text">Pocket</span>
          </h1>
        </Link>
        <nav className={isOpen ? 'open' : ''}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/cart" className="cart" onClick={toggleMenu}>
            <i className="fas fa-shopping-cart"></i>
            <span>{getTotalItems()}</span>
          </Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
