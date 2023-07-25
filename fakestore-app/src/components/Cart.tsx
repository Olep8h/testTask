import React from 'react';
import CartItem from './CartItem';

interface CartProps {
    cartItems: { id: number; title: string; price: number; image: string }[];
    onDeleteItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onDeleteItem }) => {
    const totalValue = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">Cart</h2>
            <table className="w-full mt-4">
                <thead>
                <tr>
                    <th className="px-4 py-2 font-medium text-left border-b">Product</th>
                    <th className="px-4 py-2 font-medium text-left border-b">Price</th>
                    <th className="px-4 py-2 font-medium text-left border-b">Actions</th> {/* New column for actions */}
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
                    ))}
                </tbody>
            </table>
            <p className="mt-4 text-lg font-semibold">Total: ${totalValue.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
