export const TarjetaSobreNosotros = ({ src, alt, nombre, residencia, rol }) => {
  return (
    <div className="col col-centered">
      <div className="card shadow-sm">
        <img
          src={src}
          alt={alt}
        />
        <div className="card-body">
          <p className="texto-de-tarjeta card-text align-items-center my-auto">
            {nombre}<br />{residencia === "Jalisco" ? "Residencia en Jalisco" : residencia === "CDMX" ? "Residencia en CDMX" : residencia}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div id="contenedor-rol-de-tarjeta" className="btn-group"></div>
            <small className="rol-de-tarjeta">{rol === "Desarrollo" ? "Desarrollador" : rol}</small>
          </div>
        </div>
      </div>
    </div>
  )
}