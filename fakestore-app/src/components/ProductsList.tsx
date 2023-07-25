import React from 'react';
import Product from './Product';
import Pagination from './Pagination';

interface ProductsListProps {
    products: Product[];
    currentPage: number;
    productsPerPage: number;
    onAddToCart: (product: Product) => void;
    onPageChange: (page: number) => void;
    totalPages: number;
}

const ProductsList: React.FC<ProductsListProps> = ({
                                                       products,
                                                       currentPage,
                                                       productsPerPage,
                                                       onAddToCart,
                                                       onPageChange,
                                                       totalPages,
                                                   }) => {
    // Calculate the index of the last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calculate the index of the first product on the current page
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Get the current products to be displayed on the page
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <div className="p-4">
                <h2 className="text-2xl font-semibold">Products</h2>
                {/* Add a container div with max-width */}
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {currentProducts.map((product) => (
                            <Product
                                key={product.id}
                                product={{
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    image: product.image,
                                }}
                                onAddToCart={() => onAddToCart(product)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
        </>
    );
};

export default ProductsList;
