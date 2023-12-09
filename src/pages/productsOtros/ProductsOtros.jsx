import "../../styles/productos-contenido/Productos.css";
import yazOtros from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelOtros from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyOtros from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeOtros from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynOtros from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaOtros from "../../img/fotosPerfil/imagen_6.jpeg";
import misaOtros from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductos} from "../../components/productos-contenido/TarjetaProductos";

export default function ProductsOtros() {
    return (
        <>
          <main id="main-productos-contenido">
            <section className="pt-5 pb-3 text-center container">
              <h1 className="h1-productos-contenido fw-light"><strong>Otros</strong></h1>
            </section>
    
            {/* Inicio de: Tarjetas con los nombres de los otros */}
            <section>
              <div className="fondo container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                  {/* Otros 1 */}
                  <TarjetaProductos
                    src={tonyOtros}
                    alt={"Tony"}
                    nombreProducto={"Otros 1"}
                    precio={"$55.99"}
                  />
    
                  {/* Otros 2 */}
                  <TarjetaProductos
                    src={yazOtros}
                    alt={"Yaz"}
                    nombreProducto={"Otros 2"}
                    precio={"$55.99"}
                  />
    
                  {/* Otros 3 */}
                  <TarjetaProductos
                    src={misaOtros}
                    alt={"Misa"}
                    nombreProducto={"Otros 3"}
                    precio={"$50.99"}
                  />
    
                  {/* Otros 4 */}
                  <TarjetaProductos
                    src={jocelynOtros}
                    alt={"Jocelyn"}
                    nombreProducto={"Otros 4"}
                    precio={"$50.99"}
                  />
    
                  {/* Otros 5 */}
                  <TarjetaProductos
                    src={mirtaOtros}
                    alt={"Mirta"}
                    nombreProducto={"Otros 5"}
                    precios={"$50.99"}
                  />
    
                  {/* Otros 6 */}
                  <TarjetaProductos
                    src={itzelOtros}
                    alt={"Itzel"}
                    nombreProducto={"Otros 6"}
                    precio={"$50.99"}
                  />
    
                  {/* Otros 7 */}
                  <TarjetaProductos
                    src={jorgeOtros}
                    alt={"Jorge"}
                    nombreProducto={"Otros 7"}
                    precio={"$55.99"}
                  />
    
                 
                </div>
              </div>
            </section >
            {/* Final de: Tarjetas con los nombres de otros */}
    
          </main >
        </>
      )
}
