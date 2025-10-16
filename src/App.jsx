import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeCard from "./components/HomeCard";

function App() {
  return (
    <>
      <Header />
      <div>
        <HomeCard url="about" />
        <HomeCard url="contact" />
        <HomeCard url="login" />
      </div>
      <Footer />
    </>
  );
}

export default App;
