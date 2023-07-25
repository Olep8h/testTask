import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/fakestoreApi';

const ProductFetcher: React.FC<{ children: (products: Product[], error: string) => React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message));
    }, []);

    return <>{children(products, error)}</>;
};

export default ProductFetcher;
