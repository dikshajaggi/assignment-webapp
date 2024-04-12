import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addProduct } from '../api'; // Assuming you have an addProduct function in your API

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

function FormAddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(
        async (newProduct: Product) => {
            // Simulate the process of posting new product to the server
            const addedProduct = await addProduct(newProduct); // Add the product to the API
            return addedProduct;
        },
        {
            onSuccess: (data: Product) => {
                // Update the local state of products without refetching from the API
                queryClient.setQueryData<Product[]>('products', (prev) => [...(prev || []), data]);
                setName('');
                setDescription('');
                setPrice('');
            },
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ id: Math.random(), name, description, price: parseFloat(price) });
    };

    return (
        <form onSubmit={handleSubmit} className='w-[800px] flex justify-evenly'>
            <input
                className='border rounded-md pl-1'
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='border rounded-md pl-1'
                type="text"
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                className='border rounded-md pl-1'
                type="text"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button className='h-[40px] w-[100px] bg-btn text-white rounded-md' type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Adding...' : 'Add Product'}
            </button>
        </form>
    );
}

export default FormAddProduct;
