import React, { useState } from "react";

function ProductDetails({ product }) {
    const { category, description, image_url: Poster, price } = product;

    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleRemoveFromCart = () => quantity > 0 && setQuantity(prevQuantity => prevQuantity - 1);

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
                <button onClick={handleRemoveFromCart}>-</button>
            </div>
        </div>
    );
}

export default ProductDetails;
