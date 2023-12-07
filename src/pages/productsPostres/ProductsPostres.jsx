import "../../styles/productos-contenido/Productos.css";
import yazPostres from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelPostres from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyPostres from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgePostres from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynPostres from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaPostres from "../../img/fotosPerfil/imagen_6.jpeg";
import misaPostres from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductosPostres } from "../../components/productos-contenido-postres/TarjetaProductosPostres";

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
                  {/* Postres 1 */}
                  <TarjetaProductosPostres
                    src={mirtaPostres}
                    alt={"Mirta"}
                    nombreProductoPostres={"Postres 1"}
                    precioPostres={"$75.99"}
                  />
    
                  {/* Postres 2 */}
                  <TarjetaProductosPostres
                    src={itzelPostres}
                    alt={"Itzel"}
                    nombreProductoPostres={"Postres 2"}
                    precioPostres={"$30.99"}
                  />
    
                  {/* Postres 3 */}
                  <TarjetaProductosPostres
                    src={jorgePostres}
                    alt={"Jorge"}
                    nombreProductoPostres={"Postres 3"}
                    precioPostres={"$30.99"}
                  />
    
                  {/* Postres 4 */}
                  <TarjetaProductosPostres
                    src={jocelynPostres}
                    alt={"Jocelyn"}
                    nombreProductoPostres={"Postres 4"}
                    precioPostres={"$30.99"}
                  />
    
                  {/* Postres 5 */}
                  <TarjetaProductosPostres
                    src={yazPostres}
                    alt={"Yaz"}
                    nombreProductoPostres={"Postres 5"}
                    precioPostres={"$20.99"}
                  />
    
                  {/* Postres 6 */}
                  <TarjetaProductosPostres
                    src={tonyPostres}
                    alt={"Tony"}
                    nombreProductoPostres={"Postres 6"}
                    precioPostres={"$40.99"}
                  />
    
                  {/* Postres 7 */}
                  <TarjetaProductosPostres
                    src={misaPostres}
                    alt={"Misa"}
                    nombreProductoPostres={"Postres 7"}
                    precioPostres={"$45.99"}
                  />
    
                 
                </div>
              </div>
            </section >
            {/* Final de: Tarjetas con los nombres de los postres */}
    
          </main >
        </>
      )
}
