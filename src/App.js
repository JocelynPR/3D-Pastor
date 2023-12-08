
import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products";
import LogIn from "./pages/logIn/LogIn";
import Contacto from "./pages/contacto/Contacto";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
