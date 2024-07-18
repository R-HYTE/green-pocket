import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function ProductDetails({ product }) {
    const { category, description, image_url: Poster, price } = product;
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    // Find the product in the cart to get its current quantity
    const cartItem = cart.find(item => item.id === product.id);
    const initialQuantity = cartItem ? cartItem.quantity : 0;

    // Local state for managing quantity within the component
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleAddToCart = () => {
        addToCart(product);
        setQuantity(prevQuantity => prevQuantity + 1); // Update local state after adding to cart
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product);
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0)); // Update local state after removing from cart
    };

    return (
        <div className="product">
            <div>
                <p>{category}</p>
            </div>
            <div>
                <img src={Poster !== null ? Poster : "/images/default.png"} alt={category} />
            </div>
            <div>
                <span>{category}</span>
                <h3>{description}</h3>
                <p>Ksh {price}</p>
            </div>
            <div className="quantity-controls">
                <button onClick={handleAddToCart}>+</button>
                <span>{quantity}</span>
                <button onClick={handleRemoveFromCart} disabled={quantity === 0}>-</button>
            </div>
        </div>
    );
}

export default ProductDetails;
