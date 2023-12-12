import "../../styles/productos-contenido/Productos.css";
import yazJuegos from "../../img/fotosPerfil/imagen_1.jpeg";
import itzelJuegos from "../../img/fotosPerfil/imagen_2.jpeg";
import tonyJuegos from "../../img/fotosPerfil/imagen_3.jpeg";
import jorgeJuegos from "../../img/fotosPerfil/imagen_4.jpeg";

import { TarjetaProductos} from "../../components/productos-contenido/TarjetaProductos";

export default function ProductsJuegos() {
    return (
        <>
          <main id="main-productos-contenido">
            <section className="pt-5 pb-3 text-center container">
              <h1 className="h1-productos-contenido fw-light"><strong>Juegos de Mesa</strong></h1>
            </section>
    
            {/* Inicio de: Tarjetas con los nombres de los Juegos de mesa */}
            <section>
              <div className="fondo container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                  {/* Juegos 1 */}
                  <TarjetaProductos
                    src={jorgeJuegos}
                    alt={"Jorge"}
                    nombreProducto={"Juegos 1"}
                    precio={"$25.00"}
                  />
    
                  {/* Juegos 2 */}
                  <TarjetaProductos
                    src={itzelJuegos}
                    alt={"Itzel"}
                    nombreProducto={"Juegos 2"}
                    precio={"$20.00"}
                  />
    
                  {/* Juegos 3 */}
                  <TarjetaProductos
                    src={tonyJuegos}
                    alt={"Tony"}
                    nombreProducto={"Juegos 3"}
                    precio={"$30.00"}
                  />
    
                  {/* Juegos 4 */}
                  <TarjetaProductos
                    src={yazJuegos}
                    alt={"Yaz"}
                    nombreProducto={"Juegos 4"}
                    precio={"$20.00"}
                  />
    
                 
    
                 
                </div>
              </div>
            </section >
            {/* Final de: Tarjetas con los nombres de los juegos */}
    
          </main >
        </>
      )
}
