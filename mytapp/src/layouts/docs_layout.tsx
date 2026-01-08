
import { Outlet } from "react-router-dom";
import Sidebar from "../components/side_bar";

const DocsLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DocsLayout;