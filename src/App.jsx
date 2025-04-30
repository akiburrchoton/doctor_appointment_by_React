import "./App.css";
import Navbar from "./components/home/header/navbar";
import Footer from "./components/home/footer/footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
