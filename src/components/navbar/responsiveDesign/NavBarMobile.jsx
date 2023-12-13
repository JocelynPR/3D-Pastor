import CartIcon from "../cartIcon/CartIconMobile";
import shopping_cart from "../../../img/logos/shopping_cart.svg";
import pokemon_place_logo_with_border from "../../../img/logos/pokemon_place_logo_with_border.svg";
import person_logo from "../../../img/logos/person.svg";
import dices from "../../../img/logos/dice.svg";
import key from "../../../img/logos/key.svg";
import bunny from "../../../img/logos/bunny.svg";
import cake from "../../../img/logos/cake.svg";
import table from "../../../img/logos/table.svg";
import pokeball from "../../../img/logos/catching_pokemon.svg";
import search from "../../../img/logos/search.svg";
import menu from "../../../img/logos/menu.svg";
import { Link } from "react-router-dom";
import '../../../styles/navbar/navBarMobile.css';

const NavBarMobile = () => {
  return (
    <>

      <nav className="navbar sticky-top custom-navbar-mobile p-0">
        {/* Parte superior de la navbar */}
        <div className="container-fluid" id="main-container">
          <div className="row">

            {/* Logo */}
            <div className="col">
              <CartIcon src={pokemon_place_logo_with_border} to="/Home" className="pokemon-icon-mobile" />
            </div>

            <div className="col-6">

              <div className="row">

                {/* Log In Text */}
                <div className="col-2 log-in-cart-container-navbar-mobile" id="log-in-text-container-mobile">
                  <Link to="/LogIn">
                    <span id="log-in-mobile">Log In</span>
                  </Link>
                </div>

                {/* Log In Icon */}
                <div className="col-2 log-in-cart-container-navbar-mobile">
                  <Link to="/LogIn">
                    <CartIcon src={person_logo} className="svg-cart-icon-mobile" id="personIcon" />
                  </Link>
                </div>

                {/* Cart Icon */}
                <div className="col-2 log-in-cart-container-navbar-mobile" id="cart-icon-container-navbar-mobile">
                  <CartIcon src={shopping_cart} to="/Carrito" alt="Carrito de compras" className="svg-cart-icon-mobile" id="cartIcon" />
                </div>

              </div>

              <div className="row">

                {/* Search Bar */}
                <div className="col">
                  <form className="form-inline">
                    <div id="search-wrapper-mobile">
                      <input type="search" id="search-mobile" placeholder="Buscar..." />
                      <i className="fa-search-mobile">
                        <CartIcon src={search} className="search-icon-mobile" id="searchIcon" />
                      </i>
                    </div>
                  </form>
                </div>


              </div>


            </div>


          </div>

          {/* Parte inferior de la navbar */}

          <div className="container-fluid p-0 category-bar-navbar-mobile">
            <div className="row category-bar-navbar-mobile">

              <div className="col">
                <CartIcon src={dices} to="/ProductsOficial" className="category-icon-mobile" description="Producto Oficial" />
              </div>
              <div className="col">
                <CartIcon src={key} to="ProductsAccesorios" className="category-icon-mobile" description="Accesorios" />
              </div>
              <div className="col">


          <div className="collapse" id="navbarToggleExternalContent">
            <div className="p-4">


              {/* Collaped Content */}
              <div className="container-fluid p-0 category-bar-navbar-mobile">
                <div className="row category-bar-navbar-mobile">


                  <div className="col">
                    <CartIcon src={bunny} to="/ProductsJuguetes" className="category-icon-mobile" description="Juguetes" />
                  </div>
                  <div className="col">
                    <CartIcon src={cake} to="/ProductsPostres" className="category-icon-mobile" description="Postres" />
                  </div>
                  <div className="col">
                    <CartIcon src={table} to="/ProductsJuegos" className="category-icon-mobile" description="Juegos de Mesa" />
                  </div>
                  <div className="col">
                    <CartIcon src={pokeball} to="/ProductsOtros" className="category-icon-mobile" description="Otros" />
                  </div>

                </div>
              </div>


            </div>
          </div>
          <nav className="navbar">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><img className="category-icon-mobile" src={menu} alt="Menu Icon" /></span>
              </button>
            </div>
          </nav>



              </div>


            </div>
          </div>



        </div>
      </nav>



    </>
  );
};

export default NavBarMobile;