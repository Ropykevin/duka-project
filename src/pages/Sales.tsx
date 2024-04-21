import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
}

interface Sale {
    id: number;
    pid: number;
    quantity: number;
    created_at: string;
}

const Sales: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);
    const [productId, setProductId] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [userProducts, setUserProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<Sale[]>('http://127.0.0.1:5000/sales', {
                    headers: {
                        Authorization: `${token}`
                    }
                });

                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);


    useEffect(() => {
        const fetchUserProducts = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get<Product[]>('http://127.0.0.1:5000/products', {
                    headers: {
                        Authorization: `${token}`
                    }
                });

                setUserProducts(response.data);
            } catch (error) {
                console.error('Error fetching user products:', error);
            }
        };

        fetchUserProducts();
    }, []);

    const handleProductChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setProductId(parseInt(e.target.value));
    };

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('No token found');
            }

            await axios.post('http://127.0.0.1:5000/sales', {
                pid: productId,
                quantity: quantity
            }, {
                headers: {
                    Authorization: `${token}`
                }
            });

            const salesResponse = await axios.get<Sale[]>('http://127.0.0.1:5000/sales', {
                headers: {
                    Authorization: `${token}`
                }
            });
            setSales(salesResponse.data);

            setProductId(0);
            setQuantity(0);
        } catch (error) {
            console.error('Error adding sale:', error);
        }
    };

    return (
        <div>
            <h2>Sales</h2>
            <h3>make Sale</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product:</label>
                    <select value={productId} onChange={handleProductChange}>
                        <option value={0}>Select a product</option>
                        {userProducts.map(product => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={handleQuantityChange} />
                </div>
                <button type="submit">Add Sale</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>product_id</th>
                        <th>quantity</th>
                        <th>created_at</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.pid}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Sales;
