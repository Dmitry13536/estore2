import React from "react";
import ButtonMint from "../UI/button/ButtonMint";
import img from "../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => Number(user.id) === Number(id));
  if (!user) {
    navigate("/login");
  }

  return (
    <div className="profile">
      <FontAwesomeIcon
        onClick={() => {
          navigate(`/profile/settings/${id}`);
        }}
        icon={faGear}
        className="profile__setting"
      />
      <p className="profile__title">Profile</p>
      <div className="profile__pasport">
        <img src={img} alt="avatar" className="profile__avatar" />
        <div className="profile__name">
          <p>{user.name}</p>
          <p>{user.surname}</p>
        </div>
      </div>
      <ButtonMint onClick={() => navigate(`/profile/cart/${id}`)} className="m-25">
        My cart
      </ButtonMint>
      <ButtonMint
        onClick={() => navigate(`/profile/products/${id}`)}
        className="m-25"
      >
        My products
      </ButtonMint>
      <ButtonMint onClick={() => navigate(`/main-page/${id}`)} className="m-25">
        Back
      </ButtonMint>
    </div>
  );
};

export default Profile;
