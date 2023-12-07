import "../../styles/productos-contenido/Productos.css";
import yazOtros from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelOtros from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyOtros from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeOtros from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelynOtros from "../../img/fotosPerfil/imagen_5.jpeg";
import mirtaOtros from "../../img/fotosPerfil/imagen_6.jpeg";
import misaOtros from "../../img/fotosPerfil/imagen_7.jpeg";

import { TarjetaProductosOtros } from "../../components/productos-contenido-otros/TarjetaProductosOtros";

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
                  <TarjetaProductosOtros
                    src={tonyOtros}
                    alt={"Tony"}
                    nombreProductoOtros={"Otros 1"}
                    precioOtros={"$55.99"}
                  />
    
                  {/* Otros 2 */}
                  <TarjetaProductosOtros
                    src={yazOtros}
                    alt={"Yaz"}
                    nombreProductoOtros={"Otros 2"}
                    precioOtros={"$55.99"}
                  />
    
                  {/* Otros 3 */}
                  <TarjetaProductosOtros
                    src={misaOtros}
                    alt={"Misa"}
                    nombreProductoOtros={"Otros 3"}
                    precioOtros={"$50.99"}
                  />
    
                  {/* Otros 4 */}
                  <TarjetaProductosOtros
                    src={jocelynOtros}
                    alt={"Jocelyn"}
                    nombreProductoOtros={"Otros 4"}
                    precioOtros={"$50.99"}
                  />
    
                  {/* Otros 5 */}
                  <TarjetaProductosOtros
                    src={mirtaOtros}
                    alt={"Mirta"}
                    nombreProductoOtros={"Otros 5"}
                    precioOtros={"$50.99"}
                  />
    
                  {/* Otros 6 */}
                  <TarjetaProductosOtros
                    src={itzelOtros}
                    alt={"Itzel"}
                    nombreProductoOtros={"Otros 6"}
                    precioOtros={"$50.99"}
                  />
    
                  {/* Otros 7 */}
                  <TarjetaProductosOtros
                    src={jorgeOtros}
                    alt={"Jorge"}
                    nombreProductoOtros={"Otros 7"}
                    precioOtros={"$55.99"}
                  />
    
                 
                </div>
              </div>
            </section >
            {/* Final de: Tarjetas con los nombres de los postres */}
    
          </main >
        </>
      )
}
