import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBlue from "./UI/button/ButtonBlue";
import { addToCart } from "../features/userSlice";

const CardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id,productId} = useParams();
    const {products} = useSelector(state => state);
    // const user = users.users.find(user => user.id === id);
    const product = products.products.find(product => product.id === productId);
    
    return (
      <div className="card-page">
        <div className="card-page__main">
          <img src={product.img} alt="" />
          <p className="card-page__cost">{product.cost}$</p>
        </div>
        <div className="card-page__info">
          <p>{product.title}</p>
          <p className="text-block">{product.body}</p>
        </div>
        <ButtonBlue onClick={() => dispatch(addToCart({id:id, productId:productId}))}>
          Add to Cart
        </ButtonBlue>
        <ButtonBlue onClick={() => navigate(`/main-page/${id}`)}>
          Back
        </ButtonBlue>
      </div>
    );
}

export default CardPage;