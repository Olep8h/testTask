import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
    onDeleteItem: (id: number) => void; // Function to handle item deletion
}

const CartItem: React.FC<CartItemProps> = ({ item, onDeleteItem }) => {
    return (
        <tr className="border-b">
            <td className="px-4 py-2">
                <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-14 h-14 mr-2" />
                    {item.title}
                </div>
            </td>
            <td className="px-4 py-2">${item.price}</td>
            <td className="px-4 py-2">
                <button
                    onClick={() => onDeleteItem(item.id)} // Call the onDeleteItem function with item id when the button is clicked
                    className="px-2 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
