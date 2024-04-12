import { useQuery } from 'react-query';
import { getProductList } from '../api';

function ShowProductList() {
    const { data: products, isLoading, isError } = useQuery('products', getProductList);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <div>
            {products.map((product: any) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowProductList;
