import "../../styles/sobre-nosotros/SobreNosotros.css";
import yaz from "../../img/fotosPerfil/imagen_1.jpeg";
import tony from "../../img/fotosPerfil/imagen_3.jpeg";
import jorge from "../../img/fotosPerfil/imagen_4.jpeg";
import jocelyn from "../../img/fotosPerfil/imagen_5.jpeg";
import mirta from "../../img/fotosPerfil/imagen_6.jpeg";
import misa from "../../img/fotosPerfil/imagen_7.jpeg";
import { TarjetaSobreNosotros } from "../../components/sobre-nosotros/TarjetaSobreNosotros";
import { Link } from "react-router-dom";

export default function SobreNosotros() {
  return (
    <>
      <main id="main-sobre-nosotros">
        {/* Inicio de: Logo y descripción del proyecto */}
        <section className="pt-5 pb-3 text-center container">
          <div>
            <img
              id="logo-pokemon-place-sobre-nosotros"
              src={require("../../img/logos/pokemon_place_logo.svg").default}
              alt="Logo"
            />
          </div>
          <div className="row pt-lg-5">
            <div className="col-lg-8 col-md-8 mx-auto">
              <h1 className="h1-sobre-nosotros fw-light">
                <strong>Pokémon Place Gdl</strong>
              </h1>
              <div id="descripcion-pokemon-place-sobre-nosotros">
                <p className="lead">
                  Pokémon Place Gdl es una comunidad física y virtual mexicana
                  conformada por seguidores apasionados de la franquicia
                  Pokémon, cuyas actividades constan de la organización de
                  reuniones casuales, torneos oficiales que otorgan puntos
                  clasificatorios al mundial (Premier Challenge y Midseason
                  Showdown), y estamos retomando una liga de TCG/JCC (Juego de
                  Cartas Coleccionables) con talleres para enseñar a las
                  personas a jugar y próximamente también torneos.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Final de: Logo y descripción del proyecto */}

        {/* Inicio de: Tarjetas con los nombres de los integrantes del proyecto */}
        <section>
          <div className="fondo container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {/* ---Mirta--- */}
              <TarjetaSobreNosotros
                src={mirta}
                alt={"Mirta"}
                nombre={"Mirta Adriana Tapia Don"}
                residencia={"Jalisco"}
                rol={"Product Owner"}
              />

              {/* ---Yaz--- */}
              <TarjetaSobreNosotros
                src={yaz}
                alt={"Yaz"}
                nombre={"Yazmín Valeria Morales Martínez"}
                residencia={"CDMX"}
                rol={"Scrum Master"}
              />

              {/* ---Tony--- */}
              <TarjetaSobreNosotros
                src={tony}
                alt={"Tony"}
                nombre={"Antonio González Navarrete"}
                residencia={"Jalisco"}
                rol={"Desarrollo"}
              />

              {/* ---Jorge--- */}
              <TarjetaSobreNosotros
                src={jorge}
                alt={"Jorge"}
                nombre={"Jorge Alberto Ramírez Casillas"}
                residencia={"Jalisco"}
                rol={"Desarrollo"}
              />

              {/* ---Jocelyn--- */}
              <TarjetaSobreNosotros
                src={jocelyn}
                alt={"Jocelyn"}
                nombre={"Jocelyn Karina Peña Reyes"}
                residencia={"CDMX"}
                rol={"Desarrollo"}
              />

              {/* ---Misa--- */}
              <TarjetaSobreNosotros
                src={misa}
                alt={"Misa"}
                nombre={"Misael Edgar Zepeda Díaz"}
                residencia={"CDMX"}
                rol={"Desarrollo"}
              />
            </div>
            {/* Boton de redireccionamiento a login de Adminstrador */}
            <Link to="/LoginAdmin">
              <button
                className="btn btn-outline-dark"
                id="boton-redireccinamiento-login-Administrador"
              >
                Admin
              </button>
            </Link>
          </div>
        </section>
        {/* Final de: Tarjetas con los nombres de los integrantes del proyecto */}
      </main>
    </>
  );
}
