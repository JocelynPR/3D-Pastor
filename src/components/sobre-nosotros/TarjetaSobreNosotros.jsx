export const TarjetaSobreNosotros = ({ src, alt, nombre, residencia, rol }) => {
  return (
    <div className="col-sobre-nosotros col col-centered">
      <div className="card-sobre-nosotros card shadow-sm">
        <img
          src={src}
          alt={alt}
        />
        <div className="card-body">
          <p className="texto-de-tarjeta-sobre-nosotros card-text align-items-center my-auto">
            {nombre}<br />{residencia === "Jalisco" ? "Residencia en Jalisco" : residencia === "CDMX" ? "Residencia en CDMX" : residencia}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div id="contenedor-rol-de-tarjeta-sobre-nosotros" className="btn-group"></div>
            <small className="rol-de-tarjeta-sobre-nosotros">{rol === "Desarrollo" ? "Desarrollador" : rol}</small>
          </div>
        </div>
      </div>
    </div>
  )
}