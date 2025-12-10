import { Outlet } from "react-router-dom";
import Header from "../base/Header";
import Footer from "../base/Footer";

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main style={{ padding: "1rem 2rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;