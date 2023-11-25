import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const MainLayout = () => {
  return (
    <div className="font-inter">
    <Layout>
    <div className="pt-0 min-h-[calc(100vh-306px)]">
      <Outlet />
    </div>
    </Layout >
  </div>
  );
};

export default MainLayout;
