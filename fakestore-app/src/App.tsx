import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Cart from './components/Cart';

const App: React.FC = () => {
    const [products, setProducts] = useState<{ id: number; title: string; price: number }[]>([]);
    const [cartItems, setCartItems] = useState<{ id: number; title: string; price: number }[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product: { id: number; title: string; price: number }) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    return (
        <div>
            <div>
                <h2>Products</h2>
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div>
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
};

export default App;
