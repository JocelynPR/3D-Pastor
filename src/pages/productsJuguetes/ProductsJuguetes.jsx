import "../../styles/productos-contenido/Productos.css";
import yazJuguetes from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelJuguetes from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyJuguetes from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeJuguetes from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynJuguetes from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaJuguetes from "../../img/fotosPerfil/imagen_6.jpeg";
import misaJuguetes from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductos} from "../../components/productos-contenido/TarjetaProductos";

export default function ProductsJuguetes() {
  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light"><strong>Juguetes</strong></h1>
        </section>

        {/* Inicio de: Tarjetas con los nombres de los juguetes */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/* Juguetes 1 */}
              <TarjetaProductos
                src={misaJuguetes}
                alt={"Misa"}
                nombreProducto={"Juguetes 1"}
                precio={"$30.99"}
              />

              {/* Juguetes 2 */}
              <TarjetaProductos
                src={tonyJuguetes}
                alt={"Tony"}
                nombreProducto={"Juguetes 2"}
                precio={"$30.99"}
              />

              {/* Juguetes 3 */}
              <TarjetaProductos
                src={jorgeJuguetes}
                alt={"Jorge"}
                nombreProducto={"Juguetes 3"}
                precio={"$30.99"}
              />

              {/* Juguetes 4 */}
              <TarjetaProductos
                src={yazJuguetes}
                alt={"Yaz"}
                nombreProducto={"Juguetes 4"}
                precio={"$30.99"}
              />

              {/* Juguetes 5 */}
              <TarjetaProductos
                src={yazJuguetes}
                alt={"Yaz"}
                nombreProducto={"Juguetes 5"}
                precio={"$30.99"}
              />

              {/* Juguetes 6 */}
              <TarjetaProductos
                src={tonyJuguetes}
                alt={"Tony"}
                nombreProducto={"Juguetes 6"}
                precio={"$30.99"}
              />

              {/* Juguetes 7 */}
              <TarjetaProductos
                src={mirtaJuguetes}
                alt={"Mirta"}
                nombreProducto={"AJuguetes 7"}
                precio={"$30.99"}
              />

              {/* Juguetes 8 */}
              <TarjetaProductos
                src={jocelynJuguetes}
                alt={"Jocelyn"}
                nombreProducto={"Juguetes 8"}
                precio={"$30.99"}
              />

              {/* Producto 9 */}
              <TarjetaProductos
                src={itzelJuguetes}
                alt={"Itzel"}
                nombreProducto={"Juguetes 9 "}
                precio={"$30.99"}
              />

            </div>
          </div>
        </section >
        {/* Final de: Tarjetas con los nombres de los juguetes */}

      </main >
    </>
  )
}
