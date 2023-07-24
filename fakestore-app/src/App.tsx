import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/fakestoreApi';
import Product from './components/Product';
import Cart from './components/Cart';
import { validateProductResponse } from './utils/validation';
import { useCart } from './hooks/useCart';


interface Product {
    id: number;
    title: string;
    price: number;
}
const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchProducts()
            .then(validateProductResponse)
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message));
    }, []);

    const { cartItems, addToCart } = useCart([]);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <div>
                        <h2>Products</h2>
                        {products.map((product) => (
                            <Product key={product.id} product={product} onAddToCart={() => addToCart(product)} />
                        ))}
                    </div>
                    <div>
                        <Cart cartItems={cartItems} />
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
