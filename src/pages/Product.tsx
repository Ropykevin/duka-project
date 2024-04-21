import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    cost: number;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiUrl = 'http://127.0.0.1:5000/products';
                const token = localStorage.getItem('token');
                console.log(token)

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<Product[]>(apiUrl, {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                console.log('Response data:', response.data);
                setProducts(response.data);
                setLoading(false); 

            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false); 
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>cost</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.cost}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Products;
