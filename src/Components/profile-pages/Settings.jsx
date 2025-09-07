import { useNavigate, useParams } from "react-router-dom";
import ButtonMint from "../UI/button/ButtonMint";
import { addUsersProduct, deleteUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersProducts } from "../../features/productSlice";

const Settings = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users);
  const userProducts = users.find(user => user.id == id).products;

  const handleDeleteUser = () => {
    navigate(`/`);
    dispatch(deleteUser(id));
    dispatch(deleteUsersProducts(userProducts))
  };

  return (
    <div className="profile">
      <p className="profile__page-title">Settings</p>
      <div className="profile__settings">
        <ButtonMint onClick={() => navigate(`/`)}>Log out</ButtonMint>
        <ButtonMint onClick={handleDeleteUser} className="m-25">
          Delete account
        </ButtonMint>
      </div>
      <ButtonMint onClick={() => navigate(-1)} className="m-25">
        Back
      </ButtonMint>
    </div>
  );
};

export default Settings;
