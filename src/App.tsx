// App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowProductList from './components/ShowProductList';
import FormAddProduct from './components/FormAddProduct';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mt-8 mb-4">Product List</h1>
        <ShowProductList />
        <h2 className="text-xl font-bold mt-8 mb-4">Add New Product</h2>
        <FormAddProduct />
      </div>
    </QueryClientProvider>
  );
}

export default App;
