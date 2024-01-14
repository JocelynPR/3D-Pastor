import React from 'react'
import FooterMobile from './responsiveDesign/FooterMobile'
import FooterComputer from './responsiveDesign/FooterComputer'

const Footer = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <FooterComputer />
      </div >
      <div className="d-lg-none">
        <FooterMobile />
      </div>
    </>
  )
}

export default Footer