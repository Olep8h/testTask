import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProductFetcher from './components/ProductFetcher';
import CartHandler from './components/CartHandler';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(8);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="p-4 bg-white shadow">
                <ul className="flex justify-end space-x-4">
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>

            <ProductFetcher>
                {(products, error) => (
                    <>
                        {error ? (
                            <div className="p-4 text-red-600">{error}</div>
                        ) : (
                            <CartHandler>
                                {(cartItems, handleAddToCart, handleDeleteItem) => (
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={
                                                <ProductsList
                                                    products={products}
                                                    currentPage={currentPage}
                                                    productsPerPage={productsPerPage}
                                                    onAddToCart={handleAddToCart}
                                                    onPageChange={(page) => setCurrentPage(page)}
                                                    totalPages={Math.ceil(products.length / productsPerPage)}
                                                />
                                            }
                                        />
                                        <Route
                                            path="/cart"
                                            element={<Cart cartItems={cartItems} onDeleteItem={handleDeleteItem} />}
                                        />
                                    </Routes>
                                )}
                            </CartHandler>
                        )}
                    </>
                )}
            </ProductFetcher>
        </div>
    );
};

export default App;
