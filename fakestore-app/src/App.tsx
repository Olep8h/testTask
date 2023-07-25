import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/fakestoreApi';
import Product from './components/Product';
import Cart from './components/Cart';
import SuccessMessage from './components/SuccessMessage';
import { Link, Routes, Route } from 'react-router-dom';
import Pagination from "./components/Pagination";

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [cartItems, setCartItems] = useState<Product[]>([]); // Cart items stored in the App component state
    const [timerId, setTimerId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1); // Add a state for the current page
    const [productsPerPage] = useState<number>(8); // Set the number of products per page


    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message));
    }, []);



    const showSuccessMessage = (mess: string) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        setSuccessMessage(mess);
        const newTimerId = setTimeout(() => {
            setSuccessMessage('');
        }, 5000);

        setTimerId(newTimerId as any);
    };

    const handleAddToCart = (product: Product) => {
        if (!cartItems.some((item) => item.id === product.id)) {
            setCartItems([...cartItems, product]); // Update the cartItems state manually
            showSuccessMessage(`Successfully added ${product.title} to the cart.`);
        } else {
            showSuccessMessage(`${product.title} is already in the cart.`);
        }
    };

    // Calculate the index of the last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calculate the index of the first product on the current page
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Get the current products to be displayed on the page
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);



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

            {error ? (
                <div className="p-4 text-red-600">{error}</div>
            ) : (
                <>
                    <Routes>
                        <Route
                            path="/"
                            element={
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
                                                            image: product.image
                                                        }}
                                                        onAddToCart={() => handleAddToCart(product)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={Math.ceil(products.length / productsPerPage)}
                                        onPageChange={(page) => setCurrentPage(page)}
                                    />
                                </>
                            }
                        />
                        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                    </Routes>
                </>
            )}
            {successMessage && (
                <SuccessMessage message={successMessage} onClose={() => setSuccessMessage('')} />
            )}
        </div>
    );
};

export default App;
