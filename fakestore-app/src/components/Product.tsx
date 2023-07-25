import React from 'react';

interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
    onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between h-full">
                <img src={product.image} alt={product.title} className="w-full h-48 object-contain mt-2" />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600">Price: ${product.price}</p>
            </div>
            <div>
                <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={onAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
