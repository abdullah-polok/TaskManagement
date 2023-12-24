
const Dashboard = () => {
    return (
        <div className="w-64 min-h-screen bg-primary text-white">
            <div className="avatar flex justify-center py-5">
                <div className="w-32 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="px-5">
                <h3>Name:</h3>
                <p>Email:</p>
                <p>Gender:</p>
                <p>Type:</p>
                <p>Profession:</p>
            </div>
        </div>
    );
};

export default Dashboard;