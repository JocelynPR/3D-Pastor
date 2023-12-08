import "../../styles/footer/Footer.css";
import facebookLogo from "../../img/logos/facebook.svg";
import instagramLogo from "../../img/logos/instagram.svg";
import whatsappLogo from "../../img/logos/whatsapp.svg";
import twitterLogo from "../../img/logos/twitter.svg";
import discordLogo from "../../img/logos/discord.svg";
import CartIcon from "../navbar/cartIcon/CartIcon";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">

            {/* Start of: First column for Pokemon Place Image */}
            <div className="col">
              <img id="pokemon-place-10-aniversario-footer" src={require('../../img/logos/pokemon_place_10_aniversario.svg').default} alt="Logo de la comunidad modificado para decir 10 Aniversario" />
            </div>
            {/* End of: First column for Pokemon Place Image */}

            {/* Start of: Second column for Pages */}
            <div className="col" id="second-column-footer">
              <Link to='/Home'><h5>Inicio</h5></Link>
              <Link to='/LogIn'><h5>Iniciar Sesión</h5></Link>
              <Link to='/SobreNosotros'><h5>Acerca de Nosotros</h5></Link>
              <Link to='/Contacto'><h5>Contáctanos</h5></Link>
            </div>
            {/* End of: Second column for Pages */}

            {/* Start of: Third column for Categories */}
            <div className="col-3">
              <h5 id="h5-footer">Productos</h5>

              <div className="row">
                <div className="col">
                  <ul>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Producto Oficial</li></Link>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Accesorios</li></Link>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Juguetes</li></Link>
                  </ul>
                </div>

                <div className="col">
                  <ul>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Postres</li></Link>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Juegos de Mesa</li></Link>
                    <Link to="/Products" className="text-body"><li className="list-products-footer">Otros</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* End of: Third column for Categories */}

            {/* Start of: Fourth column for Social Media Links */}
            <div className="col-4" id="fourth-column-footer">
              <div className="row justify-content-md-center">
                <div class="col-1 logo-container-footer">
                  <CartIcon src={facebookLogo} to="https://www.facebook.com/groups/PokemonPlaceGDL" alt="Logotipo de Facebook" className="logotipos-de-redes-footer" description="Facebook Grupo" />
                </div>
                <div class="col-1 logo-container-footer">
                  <CartIcon src={facebookLogo} to="https://www.facebook.com/PkmnPlaceGDL" alt="Logotipo de Facebook" className="logotipos-de-redes-footer" description="Facebook Página" />
                </div>
                <div class="col-1 logo-container-footer">
                  <CartIcon src={instagramLogo} to="https://www.instagram.com/pkmnplacegdl/" alt="Logotipo de Instagram" className="logotipos-de-redes-footer" description="Instagram" />
                </div>
                <div class="col-1 logo-container-footer">
                  <CartIcon src={whatsappLogo} to="https://docs.google.com/forms/d/e/1FAIpQLSdasOXMYAvTSakwkFa3PT9oh5rfQJ5_WPAy08vS0lKzUDfWPw/viewform" alt="Logotipo de Whatsapp" className="logotipos-de-redes-footer" description="Whatsapp" />
                </div>
                <div class="col-1 logo-container-footer">
                  <CartIcon src={twitterLogo} to="https://twitter.com/PkmnPlaceGdl" alt="Logotipo de X, conocido anteriormente como Twitter" className="logotipos-de-redes-footer" description="X (Twitter)" />
                </div>
                <div class="col-1 logo-container-footer">
                  <CartIcon src={discordLogo} to="https://discord.gg/vRrxyD9a" alt="Logotipo de Discord" className="logotipos-de-redes-footer" description="Discord" />
                </div>
              </div>
            </div>
            {/* End of: Fourth column for Social Media Links */}
          </div>
        </div>
      </footer>
    </>
  )
}
