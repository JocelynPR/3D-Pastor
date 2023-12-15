import "../../styles/logIn/LogIn.css"
import LogInDesktop from "./LogInDesktop"
import LogInMobile from "./LogInMobile"


export default function LogIn() {
  /*const localStorageUser = "userData";
  const localStoragePassword = "passData";

  const getUsers = () =>{
    const usersData = localStorage.getItem(localStorageUser)

    if (usersData){
      return;
    }else{
      return;
    }
  }*/
  return (
    <>
      <div className="d-none d-lg-block">
        < LogInDesktop/>
      </div >
      <div className="d-lg-none">
        <LogInMobile />
      </div>
    </>
  );
}
