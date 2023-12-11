import "../../styles/productos-contenido/Productos.css";
import yazAccesorios from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelAccesorios from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyAccesorios from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeAccesorios from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynAccesorios from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaAccesorios from "../../img/fotosPerfil/imagen_6.jpeg";
import misaAccesorios from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductos} from "../../components/productos-contenido/TarjetaProductos";

export default function ProductsOficial() {
  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light"><strong>Producto Oficial</strong></h1>
        </section>

        {/* Inicio de: Tarjetas con los nombres de los accesorios */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/*Accesorios 1 */}
              <TarjetaProductos
                src={itzelAccesorios}
                alt={"Itzel"}
                nombreProducto={"Accesorios 1"}
                precio={"$44.99"}
              />

              {/* Accesorios 2 */}
              <TarjetaProductos
                src={tonyAccesorios}
                alt={"Tony"}
                nombreProducto={"Accesorios 2"}
                precio={"$44.99"}
              />

              {/* Accesorios 3 */}
              <TarjetaProductos
                src={mirtaAccesorios}
                alt={"Mirta"}
                nombreProducto={"Accesorios 3"}
                precio={"$44.99"}
              />

              {/* Accesorios 4 */}
              <TarjetaProductos
                src={yazAccesorios}
                alt={"Yaz"}
                nombreProducto={"Accesorios 4"}
                precio={"$44.99"}
              />

              {/* Accesorios 5 */}
              <TarjetaProductos
                src={misaAccesorios}
                alt={"Misa"}
                nombreProducto={"Accesorios 5"}
                precio={"$44.99"}
              />

              {/* Accesorios 6 */}
              <TarjetaProductos
                src={jocelynAccesorios}
                alt={"Jocelyn"}
                nombreProducto={"Accesorios 6"}
                precio={"$44.99"}
              />

              {/* Accesorios 7 */}
              <TarjetaProductos
                src={jorgeAccesorios}
                alt={"Jorge"}
                nombreProducto={"Accesorios 7"}
                precio={"$44.99"}
              />

              {/* Accesorios 8 */}
              <TarjetaProductos
                src={mirtaAccesorios}
                alt={"Mirta"}
                nombreProducto={"Accesorios 8"}
                precio={"$44.99"}
              />

              {/* Accesorios 9 */}
              <TarjetaProductos
                src={misaAccesorios}
                alt={"Misa"}
                nombreProducto={"Accesorios 9 "}
                precio={"$44.99"}
              />

            </div>
          </div>
        </section >
        {/* Final de: Tarjetas con los nombres de los accesorios*/}

      </main >
    </>
  )
}
