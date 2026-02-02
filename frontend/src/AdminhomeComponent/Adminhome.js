import "./Adminhome.css";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Adminhome = () => {
  // Dummy data for auction status
  const auctionStatusData = [
    { name: "Active", value: 12 },
    { name: "Upcoming", value: 5 },
    { name: "Completed", value: 20 },
    { name: "Cancelled", value: 3 },
  ];

  // Dummy data for monthly revenue
  const revenueData = [
    { name: "Jan", totalRevenue: 12000 },
    { name: "Feb", totalRevenue: 15000 },
    { name: "Mar", totalRevenue: 10000 },
    { name: "Apr", totalRevenue: 18000 },
    { name: "May", totalRevenue: 22000 },
  ];

  // Dummy data for recent registrations
  const recentUsers = [
    { email: "user1@example.com", role: "Seller", date: "2025-04-01" },
    { email: "user2@example.com", role: "Buyer", date: "2025-04-02" },
    { email: "user3@example.com", role: "Seller", date: "2025-04-03" },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">Total Revenue: ₹77,000</div>
        <div className="card">Active Auctions: 12</div>
        <div className="card">Total Users: 145</div>
        <div className="card">Completed Auctions: 20</div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Auction Status Pie Chart */}
        <div className="chart-card">
          <h3>Auction Status Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={auctionStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {auctionStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Bar Chart */}
        <div className="chart-card">
          <h3>Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalRevenue" name="Revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Chart */}
      <div className="chart-card">
        <h3>Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="totalRevenue"
              name="Revenue"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Users */}
      <div className="table-card">
        <h3>Recent User Registrations</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, idx) => (
              <tr key={idx}>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminhome;
