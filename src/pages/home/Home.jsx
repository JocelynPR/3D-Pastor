import React, { useEffect, useState, useRef } from "react";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/productos-contenido/Productos.css";
import pokemonesData from "../../json/productos.json";
import imagen1 from "../../img/carousel/IMG-20231212-WA0025.jpg";
import imagen2 from "../../img/carousel/img2.png";
import imagen3 from "../../img/carousel/img_Eq.img.png";
import imagen4 from "../../img/carousel/img4.png";
import FiltroTarjetaProducto from "../../components/productos-contenido/FiltroTarjetaProducto";

// Importa directamente el archivo JSON


export default function Products() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts(pokemonesData);
  }, []);

 
  return (
    <>
     <div id="carouselExampleIndicators" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={imagen4} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light">
            <strong>Productos</strong>
          </h1>
        </section>
        <FiltroTarjetaProducto nombreDelFiltro={"Todo"} />
      </main>
    </>
  );
}