
function CardApp(prop) {
  const myCard = (
      <div className="card-container my-card">
        <a href={prop.href}>
          <img src={prop.src} alt={prop.alt} className={prop.className} />
          <p className="card-text align-items-center">{prop.description}</p>
        </a>
      </div>
  );
  return myCard;
}

export default CardApp;