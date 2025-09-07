// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ButtonBlue from "./UI/button/ButtonBlue";

const MainPage = () => {
  const { products } = useSelector((store) => store.products);
  const { id } = useParams();
  const navigate = useNavigate();


  const productRender = () => {
    if (products.length === 0) {
      return (
        <>
          <p>There not product</p>
          <ButtonBlue
            className="main-page__button"
            onClick={() => navigate(`/profile/products/make/${id}`)}
          >
            Create
          </ButtonBlue>
        </>
      );
    } else {
      return(
      <div className="product-shell">
        {products.map((good) => (
          <Card key={good.id} data={good} funcPublic={true} />
        ))}
      </div>)
    }
  };

  return (
    <>
      <div className="main-page">
        <Logo />
        {productRender()}
      </div>
      <Navigation id={id} />
    </>
  );
};

export default MainPage;
