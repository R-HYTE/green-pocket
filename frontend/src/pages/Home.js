import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import SearchIcon from "../search.svg";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    // Fetch all products or search for products based on the search term
    const fetchProducts = async (term = "") => {
        try {
            const response = await fetch(`/api/products${term ? `?search=${term}` : ''}`);
            const json = await response.json();
            
            if (response.ok) {
                setProducts(json);
            } else {
                setProducts([]); // Clear products if no products found or an error occurs
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
            setProducts([]); // Clear products if an error occurs
        }
    };

    // Handle search button click
    const handleSearch = () => {
        fetchProducts(searchTerm);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="home">
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for product"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={handleSearch}
                />
            </div>

            <div className="products">
                {products.length > 0 ? (
                    <div className="container">
                        {products.map(product => (
                            <ProductDetails key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No products found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
