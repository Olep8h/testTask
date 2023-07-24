import React from 'react';

interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
    };
    onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
