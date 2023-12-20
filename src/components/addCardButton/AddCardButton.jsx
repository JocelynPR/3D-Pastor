import React, { useEffect, useState } from "react";
import "../../styles/addCardButton/AddCardButton.css";
import { Link } from "react-router-dom";
import pokemonesData from "../../json/productos.json";


const AddCardButton = ({ onCantidadChange, buttonIdAnadir }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(pokemonesData);
  }, []);





  const readLocalStorage = (localStorageKey) => {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    const carritoStorage = [];
    const map = data.map((element, index, array) => carritoStorage.push(element));
    return carritoStorage;
  }

  const anadirAlCarrito = (id, products) => {

    let guardadoEnElCarrito = [];
    guardadoEnElCarrito = readLocalStorage("data");

    const productoEncontrado = products.find((producto) => producto.id === id);
    productoEncontrado.qty = cantidadProductos;

    guardadoEnElCarrito.push(productoEncontrado);
    if (guardadoEnElCarrito[0].id == 0) {
      guardadoEnElCarrito.splice(0, 1);
    }
    sendDataToLocalStorage(guardadoEnElCarrito);
  };


  const sendDataToLocalStorage = (productos) => {
    const data = (productos);
    localStorage.setItem("data", JSON.stringify(data));
  }


  const [cantidadProductos, setCantidadProductos] = useState(1);
  const maxProductos = 9;

  const incrementarCantidad = () => {
    if (cantidadProductos < maxProductos) {
      setCantidadProductos(cantidadProductos + 1);
    }
    onCantidadChange(cantidadProductos + 1);
  };

  const decrementarCantidad = () => {
    if (cantidadProductos > 0) {
      setCantidadProductos(cantidadProductos - 1);
      onCantidadChange(cantidadProductos - 1);
    }
  };

  const handleCarAddClick = () => {
    //console.log("Añadir al carrito:", cantidadProductos);
    // Pruebas ///////////////////////////////
    anadirAlCarrito(buttonIdAnadir, products);
    //console.log(guardadoEnElCarrito);
  };

  return (
    <div className="d-grid gap-2 col-2 mx-auto">
      {/* Contenedor centrado horizontalmente */}
      <div className="add-card-container">
        <button
          type="button"
          className="carrito-button carrito-decrement"
          onClick={decrementarCantidad}
        >
          {" "}
          -{" "}
        </button>
        {/* Contenedor con ancho fijo */}
        <div
          className="cantidad-container"
          style={{ width: "40px", textAlign: "center" }}
        >
          <span className="cantidad">{cantidadProductos}</span>
          {/* Condición para renderizar el botón de incremento */}
          {cantidadProductos < maxProductos && (
            <button
              type="button"
              className="carrito-button carrito-increment"
              onClick={incrementarCantidad}
            >
              {" "}
              +{" "}
            </button>
          )}
        </div>
      </div>
      {/* Botón principal para añadir al carrito */}
      <Link to="/Carrito">
        <button
          type="button"
          className="carrito-button carrito-add"
          onClick={handleCarAddClick}
        >
          Añadir

        </button>
      </Link>
    </div>
  );
};

export default AddCardButton;




/**
 * import React, { useEffect, useState } from "react";
import "../../styles/addCardButton/AddCardButton.css";
import { Link } from "react-router-dom";
import pokemonesData from "../../json/productos.json";

const AddCardButton = ({ onCantidadChange, buttonIdAnadir }) => {
  const [products, setProducts] = useState([]);
  const [guardadoEnElCarrito, setGuardadoEnElCarrito] = useState([]);
  const [cantidadProductos, setCantidadProductos] = useState(1);
  const maxProductos = 9;

  useEffect(() => {
    const fetchData = async () => {
      const data = await new Promise((resolve) => setTimeout(() => resolve(pokemonesData), 1000));
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      anadirAlCarrito(buttonIdAnadir, products);
    }
  }, [buttonIdAnadir, products]);

  const anadirAlCarrito = (id, products) => {
    const productoEncontrado = products.find((producto) => producto.id === id);
    setGuardadoEnElCarrito([...guardadoEnElCarrito, productoEncontrado]);
  };

  const sendDataToLocalStorage = (productos) => {
    localStorage.setItem("data", JSON.stringify(productos));
  };

  const incrementarCantidad = () => {
    if (cantidadProductos < maxProductos) {
      setCantidadProductos(cantidadProductos + 1);
    }
    onCantidadChange(cantidadProductos + 1);
  };

  const decrementarCantidad = () => {
    if (cantidadProductos > 0) {
      setCantidadProductos(cantidadProductos - 1);
      onCantidadChange(cantidadProductos - 1);
    }
  };

  const handleCarAddClick = () => {
    console.log("Añadir al carrito:", cantidadProductos);
  };

  return (
    <div className="d-grid gap-2 col-2 mx-auto">
      <div className="add-card-container">
        <button
          type="button"
          className="carrito-button carrito-decrement"
          onClick={decrementarCantidad}
        >
          {" "}
          -{" "}
        </button>
        <div
          className="cantidad-container"
          style={{ width: "40px", textAlign: "center" }}
        >
          <span className="cantidad">{cantidadProductos}</span>
          {cantidadProductos < maxProductos && (
            <button
              type="button"
              className="carrito-button carrito-increment"
              onClick={incrementarCantidad}
            >
              {" "}
              +{" "}
            </button>
          )}
        </div>
      </div>
      <Link to="/Carrito">
        <button
          type="button"
          className="carrito-button carrito-add"
          onClick={handleCarAddClick}
        >
          Añadir({buttonIdAnadir})
        </button>
      </Link>
    </div>
  );
};

export default AddCardButton;

 */