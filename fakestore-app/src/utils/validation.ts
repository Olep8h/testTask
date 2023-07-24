interface Product {
    id: number;
    title: string;
    price: number;
}

export const validateProductResponse = (data: any): Product[] => {
    if (!Array.isArray(data)) {
        throw new Error('Invalid API response: Products should be an array.');
    }

    for (const product of data) {
        if (!product.hasOwnProperty('id') || !product.hasOwnProperty('title') || !product.hasOwnProperty('price')) {
            throw new Error('Invalid API response: Product is missing required fields (id, title, price).');
        }
    }

    return data;
};
