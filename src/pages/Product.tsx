import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch products data from an API
        axios.get<Product[]>('http://example.com/api/products')
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
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
