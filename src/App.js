import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products";
import ProductsAccesorios from "./pages/productsAccesorios/ProductsAccesorios";
import ProductsJuguetes from "./pages/productsJuguetes/ProductsJuguetes";
import ProductsPostres from "./pages/productsPostres/ProductsPostres";
import ProductsJuegos from "./pages/productsJuegos/ProductsJuegos";
import ProductsOtros from "./pages/productsOtros/ProductsOtros";
import LogIn from "./pages/logIn/LogIn";
import Contacto from "./pages/contacto/Contacto";
import Carrito from "./pages/carrito/Carrito";
//import AppButtonCard from "./components/addCardButton/AppButtonCard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/*<CounterProductButton />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="productsAccesorios" element={<ProductsAccesorios />} />
          <Route path="productsJuguetes" element={<ProductsJuguetes />} />
          <Route path="productsPostres" element={<ProductsPostres />} />
          <Route path="productsJuegos" element={<ProductsJuegos />} />
          <Route path="productsOtros" element={<ProductsOtros />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
