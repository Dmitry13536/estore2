import { useEffect, useState } from "react";
import imgdefault from "../assets/test-good.jpg";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToCart,
  deleteUsersProduct,
  removeFromCart,
} from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faMoneyBill,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { deleteGood } from "../features/productSlice";
import CardPopup from "./CardPopup";

const Card = ({
  data = { title: "Sample text", cost: 100, img: imgdefault },
  funcCart = false,
  funcProd = false,
  funcPublic = false,
}) => {
  // const [isPopupOpen, SetIsPopupOpen] = useState(false);
  const { id } = useParams();
  const {users} = useSelector(state => state.users);
  const user = users.find((user) => Number(user.id) == Number(id));
  const [inCart, setInCart] = useState(user.cart.includes(data.id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // IsProductInCart(){
  //   return user.cart.includes(data.id);
  // }

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    dispatch(removeFromCart({ id: id, productId: data.id }));
  };

  const handleDeleteProduct = (event) => {
    event.stopPropagation();
    dispatch(deleteGood(data.id));
    dispatch(deleteUsersProduct({ id: id, productId: data.id }));
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    if (inCart === false) {
      dispatch(addToCart({ id: id, productId: data.id }));
      setInCart(true);
      console.log('its done')
    } else {
      handleRemoveFromCart(event);
      setInCart(false);
      console.log("its done");
    }
  };

  let promo = data.cost * 4 - data.cost / 2;

  return (
    <>
      {/* <CardPopup isOpen={isPopupOpen} onClose={() => SetIsPopupOpen(false)}>
        <div className="card__popup">
          <p>Wanna delete {data.title}?</p>
          <div className="card__popupButtons">
            <button onClick={() => SetIsPopupOpen(false)}>yes</button>
            <button onClick={() => SetIsPopupOpen(false)}>nope</button>
          </div>
        </div>
      </CardPopup> */}
      <div
        onClick={() => navigate(`/main-page/${id}/${data.id}`)}
        className="card"
        key={data.id}
      >
        <img className="card__img" src={data.img} alt="" />
        <div className="card__text">
          <p className="card__cost">
            {data.cost}$<span className="card__promo">{promo}$</span>
          </p>
          <p className="card__title">{data.title}</p>
        </div>
        {/*Function below */}
        <div className="card__functions">
          {funcCart && (
            <>
              <button onClick={handleRemoveFromCart} className="card__del">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button onClick={() => {}} className="card__buy">
                <FontAwesomeIcon icon={faMoneyBill} />
              </button>
            </>
          )}
          {funcProd && (
            <>
              <button onClick={handleDeleteProduct} className="card__del">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button onClick={() => {}} className="card__change">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </>
          )}
          {funcPublic && (
            <>
              <button
                onClick={handleAddToCart}
                className={inCart ? "card__del" : "card__buy"}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
