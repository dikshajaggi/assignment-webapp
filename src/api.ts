// api.ts
import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getProductList = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data.products;
};

export const addProduct = async (product: {
    name: string;
    description: string;
    price: number;
}) => {
    const response = await axios.post(`${API_URL}/products/add`, product);
    return response.data;
};
