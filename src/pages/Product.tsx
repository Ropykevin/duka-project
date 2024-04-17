import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    stock_quantity: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch products data from an API
        axios.get<Product[]>('http://127.0.0.1:5000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>stock quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock_quantity}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
