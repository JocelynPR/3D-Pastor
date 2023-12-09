import "../../styles/productos-contenido/Productos.css";
import yazJuguetes from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelJuguetes from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyJuguetes from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeJuguetes from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynJuguetes from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaJuguetes from "../../img/fotosPerfil/imagen_6.jpeg";
import misaJuguetes from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductosJuguetes } from "../../components/productos-contenido-juguetes/TarjetaProductosJuguetes";

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
              <TarjetaProductosJuguetes
                src={misaJuguetes}
                alt={"Misa"}
                nombreProductoJuguetes={"Juguetes 1"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 2 */}
              <TarjetaProductosJuguetes
                src={tonyJuguetes}
                alt={"Tony"}
                nombreProductoJuguetes={"Juguetes 2"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 3 */}
              <TarjetaProductosJuguetes
                src={jorgeJuguetes}
                alt={"Jorge"}
                nombreProductoJuguetes={"Juguetes 3"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 4 */}
              <TarjetaProductosJuguetes
                src={yazJuguetes}
                alt={"Yaz"}
                nombreProductoJuguetes={"Juguetes 4"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 5 */}
              <TarjetaProductosJuguetes
                src={yazJuguetes}
                alt={"Yaz"}
                nombreProductoJuguetes={"Juguetes 5"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 6 */}
              <TarjetaProductosJuguetes
                src={tonyJuguetes}
                alt={"Tony"}
                nombreProductoJuguetes={"Juguetes 6"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 7 */}
              <TarjetaProductosJuguetes
                src={mirtaJuguetes}
                alt={"Mirta"}
                nombreProductoJuguetes={"AJuguetes 7"}
                precioJuguetes={"$30.99"}
              />

              {/* Juguetes 8 */}
              <TarjetaProductosJuguetes
                src={jocelynJuguetes}
                alt={"Jocelyn"}
                nombreProductoJuguetes={"Juguetes 8"}
                precioJuguetes={"$30.99"}
              />

              {/* Producto 9 */}
              <TarjetaProductosJuguetes
                src={itzelJuguetes}
                alt={"Itzel"}
                nombreProductoJuguetes={"Juguetes 9 "}
                precioJuguetes={"$30.99"}
              />

            </div>
          </div>
        </section >
        {/* Final de: Tarjetas con los nombres de los juguetes */}

      </main >
    </>
  )
}
