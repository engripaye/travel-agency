import Sidebar from "../components/Sidebar";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: "Jan", revenue: 400 },
    { name: "Feb", revenue: 800 },
    { name: "Mar", revenue: 1200 },
    { name: "Apr", revenue: 900 },
];

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded shadow">Revenue: $5,000</div>
                    <div className="bg-white p-4 rounded shadow">Bookings: 120</div>
                    <div className="bg-white p-4 rounded shadow">Clients: 80</div>
                </div>

                {/* Chart */}
                <div className="bg-white p-4 rounded shadow">
                    <LineChart width={400} height={250} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;