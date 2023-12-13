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
      <nav className="navbar ">
        <nav className="container-fluid custom-navbar">
          <div className="row">
              <div className="col">
                  <CartIcon src={pokemon_place_logo_with_border} to="/Home" className="pokemon-icon " />
              </div>
              <div className="col">
                <Link to="/LogIn" className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                  <span id="log-in">Log In</span>
                  <CartIcon src={person_logo} className="svg-cart-icon" id="personIcon" />
                </Link>
              </div>
              <div className="col">
                <CartIcon src={shopping_cart} to="/Carrito" alt="Carrito de compras" className="svg-cart-icon" id="cartIcon" />
              </div>
              <div className="col">
                <form class="container-fluid searcher">
                  <div class="input-group">
                    <span class="input-group-text " id="basic-addon1">
                      <i>
                        <CartIcon src={search} className="search-icon" id="searcherIcon" />
                      </i>
                    </span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        <nav id="category-bar-navbar" className="container-fluid cols-2 cols-sm-3 cols-md-4 cols-lg-6 g-2">
          <CartIcon src={dices} to="/ProductsOficial" className="category-icon" description="Producto Oficial" />
          <CartIcon src={key} to="ProductsAccesorios" className="category-icon" description="Accesorios" />
          <CartIcon src={bunny} to="/ProductsJuguetes" className="category-icon" description="Juguetes" />
          <CartIcon src={cake} to="/ProductsPostres" className="category-icon" description="Postres" />
          <CartIcon src={table} to="/ProductsJuegos" className="category-icon" description="Juegos de Mesa" />
          <CartIcon src={pokeball} to="/ProductsOtros" className="category-icon" description="Otros" />
        </nav>
      </nav>
    </>
  );
};

export default NavBar;