import { useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
}

export const useCart = (initialProducts: Product[]) => {
    const [cartItems, setCartItems] = useState<Product[]>(initialProducts);

    const addToCart = (product: Product) => {
        // Check if the product is already in the cart to avoid duplicates
        const productExistsInCart = cartItems.some((item) => item.id === product.id);

        if (productExistsInCart) {
            alert('Product is already in the cart.');
            return;
        }

        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    return { cartItems, addToCart };
};
