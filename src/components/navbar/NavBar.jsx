import { Link } from "react-router-dom";
import NavBarComputer from "./responsiveDesign/NavBarComputer";
import NavBarMobile from "./responsiveDesign/NavBarMobile";

const NavBar = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <NavBarComputer />
      </div >
      <div className="d-lg-none">
        <NavBarMobile />
      </div>
    </>
  );
};

export default NavBar;