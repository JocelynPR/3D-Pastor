import React, { useEffect, useState } from "react";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/productos-contenido/Productos.css";
import pokemonesData from "../../json/productos.json";
import imagen2 from "../../img/carousel/img2.png";
import imagen3 from "../../img/carousel/img_Eq.img.png";
import imagen4 from "../../img/carousel/img4.png";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Cambiado a 0 para que el primer clic sea la primera página
  const productsPerPage = 12; // Cantidad de productos por página

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

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Slider {...settings} className="full-screen-slider">
        {/* Contenido de cada diapositiva */}
        <div className="slide">
          <img src={imagen2} alt="Imagen del Carrusel" />
        </div>
        <div className="slide">
          <img src={imagen3} alt="Imagen del Carrusel" />
        </div>
        <div className="slide">
          <img src={imagen4} alt="Imagen del Carrusel" />
        </div>
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
              {products
                .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
                .map((product, index) => (
                  <TarjetaProductos
                    key={index}
                    src={require("../../img/productos/" + product.image)}
                    alt={product.title}
                    nombreProducto={product.title}
                    precio={"$" + (product.price).toFixed(2) + " MXN"}
                  />
                ))}
            </div>
            <div>
              <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 0}>
                Anterior
              </button>
              <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                Siguiente
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

