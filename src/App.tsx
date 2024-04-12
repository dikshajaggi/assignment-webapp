// App.tsx
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowProductList from './components/ShowProductList';
import FormAddProduct from './components/FormAddProduct';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const queryClient = new QueryClient();

function App() {
  const [showProductList, setShowProductList] = useState(true);

  const loadProductList = () => {
    setShowProductList(true);
  };

  const loadAddProductForm = () => {
    setShowProductList(false);
  };

  return (
    <div className='min-h-screen'>
      <QueryClientProvider client={queryClient}>
        <div className='flex h-full'>
          <Sidebar loadProductList={loadProductList} loadAddProductForm={loadAddProductForm} />
          <div className="flex flex-col w-full">
            <Header />
            <div className="container mx-auto px-4 flex-grow">
              {showProductList ? (
                <>
                  <h1 className="text-2xl font-bold mt-8 mb-4">Product List</h1>
                  <ShowProductList />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mt-8 mb-4">Add New Product</h2>
                  <FormAddProduct />
                </>
              )}
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
