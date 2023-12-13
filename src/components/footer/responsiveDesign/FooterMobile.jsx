import "../../../styles/footer/FooterMobile.css";
import facebookLogo from "../../../img/logos/facebook.svg";
import instagramLogo from "../../../img/logos/instagram.svg";
import whatsappLogo from "../../../img/logos/whatsapp.svg";
import twitterLogo from "../../../img/logos/twitter.svg";
import discordLogo from "../../../img/logos/discord.svg";
import { LogoIcon } from "../logoIcon/LogoIconMobile";
import { Link } from "react-router-dom";

export default function FooterMobile() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">

            <div className="col-8">

              <div className="row">

                {/* Start of: First column for Pokemon Place Image */}
                <div className="col">
                  <img id="pokemon-place-10-aniversario-footer-mobile" src={require('../../../img/logos/pokemon_place_10_aniversario.svg').default} alt="Logo de la comunidad modificado para decir 10 Aniversario" />
                </div>
                {/* End of: First column for Pokemon Place Image */}

                {/* Start of: Second column for Pages */}
                <div className="col second-column-footer-mobile" id="second-column-footer-pages-mobile">
                  <Link to='/Home'><h5 className="footer-text-mobile">Inicio</h5></Link>
                  <Link to='/LogIn'><h5 className="footer-text-mobile">Iniciar Sesión</h5></Link>
                </div>
                {/* End of: Second column for Pages */}

                {/* Start of: Third column for Pages */}
                <div className="col second-column-footer-mobile division-between-pages-mobile">
                  <Link to='/SobreNosotros'><h5 className="footer-text-mobile">Acerca de Nosotros</h5></Link>
                  <Link to='/Contacto'><h5 className="footer-text-mobile">Contáctanos</h5></Link>
                </div>
                {/* End of: Third column for Pages */}

              </div>

              <div className="row">

                {/* Start of: Row for Social Media Logos */}
                <div className="col" id="fourth-column-footer-mobile">
                  <div className="row justify-content-md-center">
                    <LogoIcon src={facebookLogo} to="https://www.facebook.com/groups/PokemonPlaceGDL" alt="Logotipo de Facebook" className="logotipos-de-redes-footer-mobile" />
                    <LogoIcon src={facebookLogo} to="https://www.facebook.com/PkmnPlaceGDL" alt="Logotipo de Facebook" className="logotipos-de-redes-footer-mobile" />
                    <LogoIcon src={instagramLogo} to="https://www.instagram.com/pkmnplacegdl/" alt="Logotipo de Instagram" className="logotipos-de-redes-footer-mobile" />
                    <LogoIcon src={whatsappLogo} to="https://docs.google.com/forms/d/e/1FAIpQLSdasOXMYAvTSakwkFa3PT9oh5rfQJ5_WPAy08vS0lKzUDfWPw/viewform" alt="Logotipo de Whatsapp" className="logotipos-de-redes-footer-mobile" />
                    <LogoIcon src={twitterLogo} to="https://twitter.com/PkmnPlaceGdl" alt="Logotipo de X, conocido anteriormente como Twitter" className="logotipos-de-redes-footer-mobile" />
                    <LogoIcon src={discordLogo} to="https://discord.gg/vRrxyD9a" alt="Logotipo de Discord" className="logotipos-de-redes-footer-mobile" />
                  </div>
                </div>
                {/* End of: Row for Social Media Logos */}

              </div>

            </div>

            {/* Start of: Fourth column for Categories */}
            <div className="col">
              <ul className="division-between-products-mobile">
                <Link to="/ProductsOficial" className="text-body"><li className="list-products-footer-mobile">Producto Oficial</li></Link>
                <Link to="/ProductsAccesorios" className="text-body"><li className="list-products-footer-mobile">Accesorios</li></Link>
                <Link to="/ProductsJuguetes" className="text-body"><li className="list-products-footer-mobile">Juguetes</li></Link>
                <Link to="/ProductsPostres" className="text-body"><li className="list-products-footer-mobile">Postres</li></Link>
                <Link to="/ProductsJuegos" className="text-body"><li className="list-products-footer-mobile">Juegos de Mesa</li></Link>
                <Link to="/ProductsOtros" className="text-body"><li className="list-products-footer-mobile">Otros</li></Link>
              </ul>
            </div>
            {/* End of: Fourth column for Categories */}

          </div>
        </div>
      </footer>
    </>
  )
}