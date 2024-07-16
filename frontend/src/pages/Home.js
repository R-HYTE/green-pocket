import { useState, useEffect } from "react";

function Home() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const json = await response.json();
    
            if (response.ok) {
                setProducts(json);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home">
            <div className="products">
                {products && products.map(product => (
                    <p key={product._id}>{ product.description }</p>
                ))}
            </div>
        </div>
    )
};

export default Home;
