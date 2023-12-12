import "../../styles/productos-contenido/Productos.css";
import yazPostres from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelPostres from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyPostres from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgePostres from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynPostres from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaPostres from "../../img/fotosPerfil/imagen_6.jpeg";
import misaPostres from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductos} from "../../components/productos-contenido/TarjetaProductos";

export default function ProductsPostres() {
    return (
        <>
          <main id="main-productos-contenido">
            <section className="pt-5 pb-3 text-center container">
              <h1 className="h1-productos-contenido fw-light"><strong>Postres</strong></h1>
            </section>
    
            {/* Inicio de: Tarjetas con los nombres de los postres */}
            <section>
              <div className="fondo container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                  {/* Producto 1 */}
                  <TarjetaProductos
                    src={mirtaPostres}
                    alt={"Mirta"}
                    nombreProducto={"Postres 1"}
                    precio={"$75.99"}
                  />
    
                  {/* Producto 2 */}
                  <TarjetaProductos
                    src={itzelPostres}
                    alt={"Itzel"}
                    nombreProducto={"Postres 2"}
                    precio={"$30.99"}
                  />
    
                  {/* Producto 3 */}
                  <TarjetaProductos
                    src={jorgePostres}
                    alt={"Jorge"}
                    nombreProducto={"Postres 3"}
                    precio={"$30.99"}
                  />
    
                  {/* Producto 4 */}
                  <TarjetaProductos
                    src={jocelynPostres}
                    alt={"Jocelyn"}
                    nombreProducto={"Postres 4"}
                    precio={"$30.99"}
                  />
    
                  {/* Producto 5 */}
                  <TarjetaProductos
                    src={yazPostres}
                    alt={"Yaz"}
                    nombreProducto={"Postres 5"}
                    precio={"$20.99"}
                  />
    
                  {/* Producto 6 */}
                  <TarjetaProductos
                    src={tonyPostres}
                    alt={"Tony"}
                    nombreProducto={"Postres 6"}
                    precio={"$40.99"}
                  />
    
                  {/* Producto 7 */}
                  <TarjetaProductos
                    src={misaPostres}
                    alt={"Misa"}
                    nombreProducto={"Postres 7"}
                    precio={"$45.99"}
                  />
    
                 
                </div>
              </div>
            </section >
            {/* Final de: Tarjetas con los nombres de los postres */}
    
          </main >
        </>
      )
}
