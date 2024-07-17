function ProductDetails({ product }) {
    const { category, description, image_url: Poster, price } = product;
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
        </div>
    )
}

export default ProductDetails;
