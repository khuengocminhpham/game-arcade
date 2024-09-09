import "./App.css";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;
