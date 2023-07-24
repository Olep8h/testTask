import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: number;
    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td>${item.price}</td>
        </tr>
    );
};

export default CartItem;
