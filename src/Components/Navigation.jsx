import { faBox, faGear, faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navigation = ({id}) => {

    const navigate = useNavigate();
     return (
      <div className="navigation">
        <button onClick={()=>navigate(`/profile/settings/${id}`)} className="navigation__button"><FontAwesomeIcon icon={faGear}/></button>
        <button onClick={()=>navigate(`/profile/products/${id}`)} className="navigation__button"><FontAwesomeIcon icon={faBox}/></button>
        <button onClick={()=>navigate(`/profile/cart/${id}`)} className="navigation__button"><FontAwesomeIcon icon={faShoppingCart}/></button>
        <button onClick={()=>navigate(`/profile/${id}`)} className="navigation__button"><FontAwesomeIcon icon={faHome}/></button>
      </div>
    );
}

export default Navigation;