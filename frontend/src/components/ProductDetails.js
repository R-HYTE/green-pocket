import React, { useState } from "react";

function ProductDetails({ product }) {
    const { category, description, image_url: Poster, price } = product;

    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
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
                <button onClick={handleAdd}>+</button>
                <span>{quantity}</span>
                <button onClick={handleRemove}>-</button>
            </div>
        </div>
    );
}

export default ProductDetails;
