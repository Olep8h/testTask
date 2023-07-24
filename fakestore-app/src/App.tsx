import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/fakestoreApi';
import Product from './components/Product';
import Cart from './components/Cart';
import { validateProductResponse } from './utils/validation';
import { useCart } from './hooks/useCart';
import SuccessMessage from './components/SuccessMessage';

interface Product {
    id: number;
    title: string;
    price: number;
}
const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    useEffect(() => {
        fetchProducts()
            .then(validateProductResponse)
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message));
    }, []);

    const { cartItems, addToCart } = useCart([]);

    const showSuccessMessage = (productName: string) => {
        setSuccessMessage(`Successfully added ${productName} to the cart.`);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000); // Display the message for 3 seconds and then hide it
    };

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <div>
                        <h2>Products</h2>
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                onAddToCart={() => {
                                    addToCart(product);
                                    showSuccessMessage(product.title);
                                }}
                            />
                        ))}
                    </div>
                    <div>
                        <Cart cartItems={cartItems} />
                    </div>
                </>
            )}
            {successMessage && <SuccessMessage message={successMessage} onClose={() => setSuccessMessage('')} />}
        </div>
    );
};

export default App;
