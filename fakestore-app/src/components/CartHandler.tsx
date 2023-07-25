import React, { ReactNode, useState, useEffect } from 'react';
import SuccessMessage from './SuccessMessage';

type CartHandlerProps = {
    children: (
        cartItems: Product[],
        handleAddToCart: (product: Product) => void,
        handleDeleteItem: (itemId: number) => void,
        getProductSuccessMessage: (productId: number) => string | undefined
    ) => ReactNode;
};

const CartHandler: React.FC<CartHandlerProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [successMessages, setSuccessMessages] = useState<{ [key: number]: string }>({});
    const [currentProductId, setCurrentProductId] = useState<number | null>(null);

    useEffect(() => {
        // Clear the currentProductId after 5 seconds
        const timer = setTimeout(() => {
            setCurrentProductId(null);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentProductId]);

    const showSuccessMessage = (productId: number, mess: string) => {
        setSuccessMessages((prevMessages) => ({ ...prevMessages, [productId]: mess }));
        setCurrentProductId(productId);
    };

    const handleAddToCart = (product: Product) => {
        if (!cartItems.some((item) => item.id === product.id)) {
            setCartItems([...cartItems, product]);
            showSuccessMessage(product.id, `Successfully added ${product.title} to the cart.`);
        } else {
            showSuccessMessage(product.id, `${product.title} is already in the cart.`);
        }
    };

    const handleDeleteItem = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const getProductSuccessMessage = (productId: number) => {
        return successMessages[productId];
    };

    return (
        <>
            {children(cartItems, handleAddToCart, handleDeleteItem, getProductSuccessMessage)}
            {currentProductId !== null && (
                <SuccessMessage
                    key={currentProductId}
                    message={successMessages[currentProductId]}
                    onClose={() =>
                        setSuccessMessages((prevMessages) => ({
                            ...prevMessages,
                            [currentProductId]: '',
                        }))
                    }
                />
            )}
        </>
    );
};

export default CartHandler;
