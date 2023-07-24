import React from 'react';
import CartItem from './CartItem';

interface CartProps {
    cartItems: { id: number; title: string; price: number }[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
    const totalValue = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                </tbody>
            </table>
            <p>Total: ${totalValue}</p>
        </div>
    );
};

export default Cart;
