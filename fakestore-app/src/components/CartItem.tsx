import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;

    };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    return (
        <tr className="border-b">
            <td className="px-4 py-2">
                <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-14 h-14 mr-2" /> {/* Display the image */}
                    {item.title}
                </div>
            </td>
            <td className="px-4 py-2">${item.price}</td>
        </tr>
    );
};

export default CartItem;
