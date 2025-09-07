import { useNavigate, useParams } from "react-router-dom";
import ButtonMint from "../UI/button/ButtonMint";
import { useSelector } from "react-redux";
import Card from "../Card";

const MyProducts = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.products);
  const user = users.find((user) => user.id === Number(id));

  const makeProducts = () => {
    if (user.products.length === 0) {
      return <div className="profile__nothing">there is nothing</div>;
    } else {
      const usPro = products.filter((product) =>
        user.products.includes(product.id)
      );
      return (
        <div className="profile__wrapper">
          <div className="profile__products">
            {usPro.map((product) => (
              <Card
                data={product}
                funcProd={true}
              />
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="profile">
      <p className="profile__page-title">My products</p>
      {makeProducts()}
      <br className="space" />
      <ButtonMint
        onClick={() => navigate(`/profile/products/make/${id}`)}
        className="m-25"
      >
        Make card
      </ButtonMint>
      <ButtonMint onClick={() => navigate(-1)} className="m-25">
        Back
      </ButtonMint>
    </div>
  );
};

export default MyProducts;
