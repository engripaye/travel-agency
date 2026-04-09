import { Home, Users, Map, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5">
            <h1 className="text-xl font-bold mb-6">Travel Admin</h1>

            <nav className="flex flex-col gap-4">
                <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
                    <Home size={18} /> Dashboard
                </Link>

                <Link to="/bookings" className="flex items-center gap-2 hover:text-blue-400">
                    <Calendar size={18} /> Bookings
                </Link>

                <Link to="/clients" className="flex items-center gap-2 hover:text-blue-400">
                    <Users size={18} /> Clients
                </Link>

                <Link to="/destinations" className="flex items-center gap-2 hover:text-blue-400">
                    <Map size={18} /> Destinations
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;