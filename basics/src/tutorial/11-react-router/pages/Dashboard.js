import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="section">
      <h2>Dashboard</h2>
      <Outlet />
    </section>
  );
};

export default Dashboard;
