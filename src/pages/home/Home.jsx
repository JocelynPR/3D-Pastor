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

// Importa directamente el archivo JSON


export default function Products() {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null); // Definir la referencia aquí


  useEffect(() => {
    setProducts(pokemonesData);
  }, []);

  const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
     <Slider ref={sliderRef} {...settings} className="full-screen-slider">
      {/* Contenido de cada diapositiva */}
      <div className="slide" onClick={() => sliderRef.current.slickNext()}>
        <img src={imagen1} alt="Imagen del Carrusel" />
      </div>
      <div className="slide" onClick={() => sliderRef.current.slickNext()}>
        <img src={imagen2} alt="Imagen del Carrusel" />
      </div>
      <div className="slide" onClick={() => sliderRef.current.slickNext()}>
        <img src={imagen3} alt="Imagen del Carrusel" />
      </div>
      <div className="slide" onClick={() => sliderRef.current.slickNext()}>
        <img src={imagen4} alt="Imagen del Carrusel" />
      </div>
      {/* Agrega más diapositivas según sea necesario */}
    </Slider>

      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light">
            <strong>Productos</strong>
          </h1>
        </section>

        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {products.map((product, index) => (
                <TarjetaProductos
                  key={index}
                  src={require("../../img/productos/" + product.image)}
                  alt={product.title}
                  nombreProducto={product.title}
                  precio={"$" + (product.price).toFixed(2) + " MXN"}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
