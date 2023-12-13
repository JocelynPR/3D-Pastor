
import "../../styles/productos-contenido/Productos.css";
import FiltroTarjetaProducto from "../../components/productos-contenido/FiltroTarjetaProducto";

const ProductsOficial = () => {
  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light">
            <strong>Producto Oficial</strong>
          </h1>
        </section>

        <FiltroTarjetaProducto
          nombreDelFiltro={"Producto Oficial"}
        />

      </main>
    </>
  )
}

export default ProductsOficial