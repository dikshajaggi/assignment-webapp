import React from 'react';

interface SidebarProps {
    loadProductList: () => void;
    loadAddProductForm: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ loadProductList, loadAddProductForm }) => {
    return (
        <div className='flex flex-col min-h-screen w-[200px] text-white bg-dark-1 items-center'>
            <h1 className=' mt-10 text-[30px] font-semibold'>Logo</h1>
            <div className='mt-20 flex flex-col items-center'>
                <button className="bg-btn h-[40px] w-[160px] rounded-md mb-10" onClick={loadProductList}>Product List</button>
                <button className="bg-btn h-[40px] w-[160px] rounded-md" onClick={loadAddProductForm}>Add Product Form</button>
            </div>
        </div>
    );
};

export default Sidebar;
