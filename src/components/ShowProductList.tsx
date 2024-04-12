import { useQuery } from 'react-query';
import { getProductList } from '../api';

function ShowProductList() {
    const { data: products, isLoading, isError } = useQuery('products', getProductList, {
        staleTime: Infinity, // data will never be considered stale
        cacheTime: 60000, //  will be cached for 1 min
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: any) => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-800 font-bold">${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowProductList;


