import CartIcon from "./cartIcon/CartIcon";
import shopping_cart from "../../img/logos/shopping_cart.svg";
import pokemon_place_logo_with_border from "../../img/logos/pokemon_place_logo_with_border.svg";
import person_logo from "../../img/logos/person.svg";
import dices from "../../img/logos/dice.svg";
import key from "../../img/logos/key.svg";
import bunny from "../../img/logos/bunny.svg";
import cake from "../../img/logos/cake.svg";
import table from "../../img/logos/table.svg";
import pokeball from "../../img/logos/catching_pokemon.svg";
import search from "../../img/logos/search.svg";
import {Link} from "react-router-dom";
//import menu from "../../img/logos/menu.svg";

import '../../styles/navbar/navBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="navbar-brand">
          <CartIcon src={pokemon_place_logo_with_border} to="/Home" className="pokemon-icon" />
        </div>
        <div className="mx-auto col-lg-4">
          <form className="form-inline">
            <div id="search-wrapper">
              <input type="search" id="search" placeholder="Buscar" />
              <i className="fa-search">
                <CartIcon src={search} className="search-icon" id="searchIcon" />
              </i>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <div className="container m-3">
            <Link to="/LogIn" className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-3">
              <span id="log-in">Log In</span>
              <CartIcon src={person_logo} className="svg-cart-icon" id="personIcon" />
            </Link>
          </div>
          <CartIcon src={shopping_cart} to="https://pokemmo.com/en/" alt="Carrito de compras" className="svg-cart-icon" id="cartIcon" />
        </div>
      </nav>
      <div id="category-bar-navbar" className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 category-bar">
        <CartIcon src={dices} to="/ProductsOficial" className="category-icon" description="Producto Oficial" />
        <CartIcon src={key} to="ProductsAccesorios" className="category-icon" description="Accesorios" />
        <CartIcon src={bunny} to="/ProductsJuguetes" className="category-icon" description="Juguetes" />
        <CartIcon src={cake} to="/ProductsPostres" className="category-icon" description="Postres" />
        <CartIcon src={table} to="/ProductsJuegos" className="category-icon" description="Juegos de Mesa" />
        <CartIcon src={pokeball} to="/ProductsOtros" className="category-icon" description="Otros" />
      </div>
    </>
  );
};

export default NavBar;