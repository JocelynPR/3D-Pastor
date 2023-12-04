import "../../styles/footer/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column 1--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src={require('../../img/logos/pokemon_place_10_aniversario.svg').default} alt="Logo de la comunidad modificado para decir 10 Aniversario" />
            </div>
            {/* <!--Grid column 1 Ends--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <a href='/Home'><h5>Inicio</h5></a>
              <a href='/LogIn'><h5>Iniciar Sesión</h5></a>
              <a href='/SobreNosotros'><h5>Acerca de Nosotros</h5></a>
              <a href='/Contacto'><h5>Contáctanos</h5></a>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Productos</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-body">Producto Oficial</a>
                </li>
                <li>
                  <a href="#!" className="text-body">Accesorios</a>
                </li>
                <li>
                  <a href="#!" className="text-body">Juguetes</a>
                </li>
              </ul>



              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-body">Postres</a>
                </li>
                <li>
                  <a href="#!" className="text-body">Juegos de Mesa</a>
                </li>
                <li>
                  <a href="#!" className="text-body">Otros</a>
                </li>
              </ul>

            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

              <ul className="list-unstyled">
                <li>
                  <a href='https://www.facebook.com/groups/PokemonPlaceGDL' ><img className='logotipos-de-redes' src={require('../../img/logos/facebook.svg').default} alt="Logotipo de Facebook" />Facebook Grupo</a>
                </li>
                <li>
                  <a href='https://www.facebook.com/PkmnPlaceGDL' ><img className='logotipos-de-redes' src={require('../../img/logos/facebook.svg').default} alt="Logotipo de Facebook" />Facebook Página</a>
                </li>
                <li>
                  <a href='https://www.instagram.com/pkmnplacegdl/' ><img className='logotipos-de-redes' src={require('../../img/logos/instagram.svg').default} alt="Logotipo de Instagram" />Instagram</a>
                </li>
                <li>
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdasOXMYAvTSakwkFa3PT9oh5rfQJ5_WPAy08vS0lKzUDfWPw/viewform' ><img className='logotipos-de-redes' src={require('../../img/logos/whatsapp.svg').default} alt="Logotipo de Whatsapp" />Whatsapp</a>
                </li>
                <li>
                  <a href='https://twitter.com/PkmnPlaceGdl' ><img className='logotipos-de-redes' src={require('../../img/logos/twitter.svg').default} alt="Logotipo de X, conocido anteriormente como Twitter" />X (Twitter)</a>
                </li>
                <li>
                  <a href='https://discord.gg/vRrxyD9a' ><img className='logotipos-de-redes' src={require('../../img/logos/discord.svg').default} alt="Logotipo de Discord" />Discord</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}
      </footer>
    </>
  )
}
