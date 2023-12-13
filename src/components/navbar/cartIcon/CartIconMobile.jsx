import {Link} from 'react-router-dom';

function CartIcon(prop) {
  const myCard = (
      <div className="card-container my-card">
        <Link to={prop.to}>
          <img src={prop.src} alt={prop.alt} className={prop.className} />
          <p className="card-text-navbar-mobile card-text align-items-center">{prop.description}</p>
        </Link>
      </div>
  );
  return myCard;
}

export default CartIcon;