import { Outlet } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h2>Dashboard</h2>
      <h4>hello, {user?.name}</h4>
      <Outlet />
    </section>
  );
};

export default Dashboard;
