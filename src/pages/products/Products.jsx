import "../../styles/productos-contenido/Productos.css";

import yaz from "../../img/fotosPerfil/imagen_1.jpeg";
import itzel from "../../img/fotosPerfil/imagen_2.jpeg";
import tony from "../../img/fotosPerfil/imagen_3.jpeg";
import jorge from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelyn from "../../img/fotosPerfil/imagen_5.jpeg";
import mirta from "../../img/fotosPerfil/imagen_6.jpeg";
import misa from "../../img/fotosPerfil/imagen_7.jpeg";
import { TarjetaProductos } from "../../components/productos-contenido/TarjetaProductos";

export default function Products() {
  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light"><strong>Productos</strong></h1>
        </section>

        {/* Inicio de: Tarjetas con los nombres de los productos */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/* Producto 1 */}
              <TarjetaProductos
                src={mirta}
                alt={"Mirta"}
                nombreProducto={"Producto 1 "}
                precio={"$99.99"}
              />

              {/* Producto 2 */}
              <TarjetaProductos
                src={yaz}
                alt={"Yaz"}
                nombreProducto={"Producto 2"}
                precio={"$99.99"}
              />

              {/* Producto 3 */}
              <TarjetaProductos
                src={itzel}
                alt={"Itzel"}
                nombreProducto={"Producto 3"}
                precio={"$99.99"}
              />

              {/* Producto 4 */}
              <TarjetaProductos
                src={tony}
                alt={"Tony"}
                nombreProducto={"Producto 4"}
                precio={"$99.99"}
              />

              {/* Producto 5 */}
              <TarjetaProductos
                src={jorge}
                alt={"Jorge"}
                nombreProducto={"Producto 5"}
                precio={"$99.99"}
              />

              {/* Producto 6 */}
              <TarjetaProductos
                src={jocelyn}
                alt={"Jocelyn"}
                nombreProducto={"Producto 6"}
                precio={"$99.99"}
              />

              {/* Producto 7 */}
              <TarjetaProductos
                src={misa}
                alt={"Misa"}
                nombreProducto={"Producto 7"}
                precio={"$99.99"}
              />

              {/* Producto 8 */}
              <TarjetaProductos
                src={mirta}
                alt={"Mirta"}
                nombreProducto={"Producto 8"}
                precio={"$99.99"}
              />

              {/* Producto 9 */}
              <TarjetaProductos
                src={yaz}
                alt={"Yaz"}
                nombreProducto={"Producto 9 "}
                precio={"$99.99"}
              />

            </div>
          </div>
        </section >
        {/* Final de: Tarjetas con los nombres de los integrantes del proyecto */}

      </main >
    </>
  )
}
