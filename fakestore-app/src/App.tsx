import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/fakestoreApi';
import Product from './components/Product';
import Cart from './components/Cart';

const App: React.FC = () => {
    const [products, setProducts] = useState<{ id: number; title: string; price: number }[]>([]);
    const [cartItems, setCartItems] = useState<{ id: number; title: string; price: number }[]>([]);

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product: { id: number; title: string; price: number }) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    return (
        <div>
            <div>
                <h2>Products</h2>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
                ))}
            </div>
            <div>
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
};

export default App;
