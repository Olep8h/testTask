import axios from 'axios';


export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        const data = response.data;

        const productsWithImage = data.map((product) => ({
            ...product,
            image: product.image // Assuming the API already provides the image property
        }));

        return productsWithImage;
    } catch (error) {
        // Handle any error that occurred during the API call
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to be handled by the calling code
    }
}
