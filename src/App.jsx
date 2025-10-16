import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
