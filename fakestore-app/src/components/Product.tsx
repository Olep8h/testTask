import React from 'react';

interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
    };
    addToCart: (product: { id: number; title: string; price: number }) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
