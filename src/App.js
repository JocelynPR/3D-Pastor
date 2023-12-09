import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products";
import LogIn from "./pages/logIn/LogIn";
import Contacto from "./pages/contacto/Contacto";
import AddCardButton from "./components/addCardButton/AddCardButton";
import AppButtonCard from "./components/addCardButton/AppButtonCard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppButtonCard />
        {/*<CounterProductButton />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="sobreNosotros" element={<SobreNosotros />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
