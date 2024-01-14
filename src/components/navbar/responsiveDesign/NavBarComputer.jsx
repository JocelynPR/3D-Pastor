import CartIcon from "../cartIcon/CartIconComputer";
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
import { Link } from "react-router-dom";
import '../../../styles/navbar/navBarComputer.css';

const NavBarComputer = () => {
  return (
    <>


      <nav className="navbar sticky-top custom-navbar p-0">
        {/* Parte superior de la navbar */}
        <div className="container-fluid" id="main-container">
          <div className="row">

            {/* Logo */}
            <div className="col">
              <CartIcon src={pokemon_place_logo_with_border} to="/Home" className="pokemon-icon" />
            </div>

            {/* Search Bar */}
            <div className="col">
              <form className="form-inline">
                <div id="search-wrapper">
                  <input type="search" id="search" placeholder="Buscar..." />
                  <i className="fa-search">
                    <CartIcon src={search} className="search-icon" id="searchIcon" />
                  </i>
                </div>
              </form>
            </div>

            {/* Log In and Cart */}
            <div className="col">
              <div className="d-flex justify-content-end align-items-center" id="log-in-cart-container-navbar">
                <div className="container">
                  <Link to="/LogIn" className="row row-cols-2 g-3">
                    <span id="log-in">Log In</span>
                    <CartIcon src={person_logo} to="/LogIn" className="svg-cart-icon" id="personIcon" />
                  </Link>
                </div>
                <div id="cart-icon-container-navbar">
                  <CartIcon src={shopping_cart} to="/Carrito" alt="Carrito de compras" className="svg-cart-icon" id="cartIcon" />
                </div>
              </div>
            </div>

          </div>

          {/* Parte inferior de la navbar */}

          <div className="container-fluid p-0 category-bar-navbar">
            <div className="row category-bar-navbar">

              <div className="col">
                <CartIcon src={dices} to="/ProductsOficial" className="category-icon" description="Producto Oficial" />
              </div>
              <div className="col">
                <CartIcon src={key} to="ProductsAccesorios" className="category-icon" description="Accesorios" />
              </div>
              <div className="col">
                <CartIcon src={bunny} to="/ProductsJuguetes" className="category-icon" description="Juguetes" />
              </div>
              <div className="col">
                <CartIcon src={cake} to="/ProductsPostres" className="category-icon" description="Postres" />
              </div>
              <div className="col">
                <CartIcon src={table} to="/ProductsJuegos" className="category-icon" description="Juegos de Mesa" />
              </div>
              <div className="col">
                <CartIcon src={pokeball} to="/ProductsOtros" className="category-icon" description="Otros" />
              </div>

            </div>
          </div>

        </div>
      </nav>



    </>
  );
};

export default NavBarComputer;