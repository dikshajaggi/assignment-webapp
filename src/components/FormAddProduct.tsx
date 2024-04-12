import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

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
            // simulate the process of posting new product to the server
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // simulating the process of adding new product to the client-side data
            return newProduct;
        },
        {
            onSuccess: (data: Product) => {
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Adding...' : 'Add Product'}
            </button>
        </form>
    );
}

export default FormAddProduct;
