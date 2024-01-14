import "../../styles/productos-contenido/Productos.css";

import FiltroTarjetaProducto from "../../components/productos-contenido/FiltroTarjetaProducto";


export default function ProductsPostres() {
    return (
        <>
          <main id="main-productos-contenido">
            <section className="pt-5 pb-3 text-center container">
              <h1 className="h1-productos-contenido fw-light"><strong>Postres</strong></h1>
            </section>
    
            {/* Inicio de: Tarjetas con los nombres de los postres */}
            <FiltroTarjetaProducto
              nombreDelFiltro={"Postres"}
            />
            {/* Final de: Tarjetas con los nombres de los postres */}
    
          </main >
        </>
      )
}
