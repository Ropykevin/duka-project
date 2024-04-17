import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Sale {
    id: number;
    pid: number;
    quantity: number;
    created_at: string;
}

const Sales: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        // Fetch sales data from an API
        axios.get<Sale[]>('http://127.0.0.1:5000/sales')
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
                        <th>Product id</th>
                        <th>Quantity</th>
                        <th>Time</th>
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
