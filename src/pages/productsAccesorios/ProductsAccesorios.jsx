import "../../styles/productos-contenido/Productos.css";
import yazAccesorios from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelAccesorios from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyAccesorios from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeAccesorios from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynAccesorios from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaAccesorios from "../../img/fotosPerfil/imagen_6.jpeg";
import misaAccesorios from "../../img/fotosPerfil/imagen_7.jpeg";
import { TarjetaProductosAccesorios } from "../../components/productos-contenido-accesorios/TarjetaProductosAccesorios";

export default function ProductsAccesorios() {
  return (
    <>
      <main id="main-productos-contenido">
        <section className="pt-5 pb-3 text-center container">
          <h1 className="h1-productos-contenido fw-light"><strong>Accesorios</strong></h1>
        </section>

        {/* Inicio de: Tarjetas con los nombres de los accesorios */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {/*Accesorios 1 */}
              <TarjetaProductosAccesorios
                src={itzelAccesorios}
                alt={"Itzel"}
                nombreProductoAccesorios={"Accesorios 1"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 2 */}
              <TarjetaProductosAccesorios
                src={tonyAccesorios}
                alt={"Tony"}
                nombreProductoAccesorios={"Accesorios 2"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 3 */}
              <TarjetaProductosAccesorios
                src={mirtaAccesorios}
                alt={"Mirta"}
                nombreProductoAccesorios={"Accesorios 3"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 4 */}
              <TarjetaProductosAccesorios
                src={yazAccesorios}
                alt={"Yaz"}
                nombreProductoAccesorios={"Accesorios 4"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 5 */}
              <TarjetaProductosAccesorios
                src={misaAccesorios}
                alt={"Misa"}
                nombreProductoAccesorios={"Accesorios 5"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 6 */}
              <TarjetaProductosAccesorios
                src={jocelynAccesorios}
                alt={"Jocelyn"}
                nombreProductoAccesorios={"Accesorios 6"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 7 */}
              <TarjetaProductosAccesorios
                src={jorgeAccesorios}
                alt={"Jorge"}
                nombreProductoAccesorios={"Accesorios 7"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 8 */}
              <TarjetaProductosAccesorios
                src={mirtaAccesorios}
                alt={"Mirta"}
                nombreProductoAccesorios={"Accesorios 8"}
                precioAccesorios={"$44.99"}
              />

              {/* Accesorios 9 */}
              <TarjetaProductosAccesorios
                src={misaAccesorios}
                alt={"Misa"}
                nombreProductoAccesorios={"Accesorios 9 "}
                precioAccesorios={"$44.99"}
              />

            </div>
          </div>
        </section >
        {/* Final de: Tarjetas con los nombres de los accesorios*/}

      </main >
    </>
  )
}
