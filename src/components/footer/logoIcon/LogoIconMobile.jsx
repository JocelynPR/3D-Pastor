import React from 'react'
import { Link } from 'react-router-dom'

export const LogoIcon = (prop) => {
  return (
    <div className="col-2 logo-container-footer-mobile">
      <Link to={prop.to} target="_blank">
        <div className="card text-center bg-transparent border-0">
          <img className={"card-img-top " + prop.className} src={prop.src} alt={prop.alt} />
        </div>
      </Link>
    </div>
  )
}
