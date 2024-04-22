import React, { useState, useEffect } from "react";
import axios from "axios";
import 'chart.js/auto';
import { Line, Bar } from "react-chartjs-2";
import '../css/dashboard.css'

interface DashboardData {
    date: string;
    total_sales: number;
}

interface ProductData {
    name: string;
    sales_product: number;
}

interface ChartData {
    labels: string[];
    values: number[];
}

const Dashboard: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], values: [] });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const apiUrl = "http://127.0.0.1:5000/dashboard";
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("Access token not found");
                }

                const response = await axios.get<{
                    sales_data: DashboardData[];
                    salesproduct_data: ProductData[];
                }>(apiUrl, {
                    headers: {
                        Authorization: ` ${token}`,
                    },
                });

                const { salesproduct_data } = response.data;

                const salesLabels = salesproduct_data.map((item) => item.name);
                const salesValues = salesproduct_data.map((item) => item.sales_product);

                setChartData({
                    labels: salesLabels,
                    values: salesValues,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="row">
                <div className="col-md-4">
                    <div style={{ height: "400px" }}>
                        <Line
                            data={{
                                labels: chartData.labels,
                                datasets: [
                                    {
                                        label: "Total Sales per Day",
                                        data: chartData.values,
                                        fill: false,
                                        borderColor: "rgb(75, 192, 192)",
                                        tension: 0.1,
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ height: "400px" }}>
                        <Bar
                            data={{
                                labels: chartData.labels,
                                datasets: [
                                    {
                                        label: "Total Sales per Product",
                                        data: chartData.values,
                                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                                        borderColor: "rgba(75, 192, 192, 1)",
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
