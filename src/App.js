import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import ProductsOficial from "./pages/productsOficial/ProductsOficial";
import ProductsAccesorios from "./pages/productsAccesorios/ProductsAccesorios";
import ProductsJuguetes from "./pages/productsJuguetes/ProductsJuguetes";
import ProductsPostres from "./pages/productsPostres/ProductsPostres";
import ProductsJuegos from "./pages/productsJuegos/ProductsJuegos";
import ProductsOtros from "./pages/productsOtros/ProductsOtros";
import ProductRegistration from "./pages/productRegistration/productRegistration";
import UserRegistration from "./pages/UserRegistration/UserRegistration";
import LoginAdmin from "./pages/admin/LoginAdmin";
import Sidebar from "./components/narvarLateral/sidebar";

import LogIn from "./pages/logIn/LogIn";
import Contacto from "./pages/contacto/Contacto";
// import registroProduct from "./pages/Registro/Registro";
import Carrito from "./pages/carrito/Carrito";
//import AppButtonCard from "./components/addCardButton/AppButtonCard";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {/*<CounterProductButton />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Sidebar" element={<Sidebar />} />
          <Route path="productsOficial" element={<ProductsOficial />} />
          <Route path="productsAccesorios" element={<ProductsAccesorios />} />
          <Route path="productsJuguetes" element={<ProductsJuguetes />} />
          <Route path="productsPostres" element={<ProductsPostres />} />
          <Route path="productsJuegos" element={<ProductsJuegos />} />
          <Route path="productsOtros" element={<ProductsOtros />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="productRegistration" element={<ProductRegistration />} />
          <Route path="userRegistration" element={<UserRegistration />} />
          <Route path="LoginAdmin" element={<LoginAdmin />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="Registro" element={<registroProduct />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
