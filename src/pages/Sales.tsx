import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Sale {
    id: number;
    product: string;
    quantity: number;
    amount: number;
}

const Sales: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        // Fetch sales data from an API
        axios.get<Sale[]>('http://example.com/api/sales')
            .then(response => {
                setSales(response.data);
            })
            .catch(error => {
                console.error('Error fetching sales:', error);
            });
    }, []);

    return (
        <div>
            <h2>Sales</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Sales;
