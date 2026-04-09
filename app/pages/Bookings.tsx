const Bookings = () => {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Bookings</h1>

            <table className="w-full mt-4 border">
                <thead>
                <tr className="bg-gray-200">
                    <th>Name</th>
                    <th>Destination</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>Dubai</td>
                    <td>Confirmed</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;