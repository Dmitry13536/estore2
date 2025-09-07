import ButtonBlue from "./UI/button/ButtonBlue";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Start = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/login');
  }

  // const location = useLocation();

  // useEffect(() => {
  //   console.log("current location ", location.pathname);
  // }, [location]);

    return (
      <div className="start">
        <Logo />
        <ButtonBlue onClick={handleNavigate}>Lest start</ButtonBlue>
      </div>
    );
}

export default Start;