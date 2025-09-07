import { useNavigate, useParams } from "react-router-dom";
import ButtonMint from "../UI/button/ButtonMint";
import imgDef from "../../assets/default.webp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewGood } from "../../features/productSlice";
import { addUsersProduct } from "../../features/userSlice";

const MakeCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const protoProduct = {
    id: id + Date.now(),
    title: "",
    body: "",
    cost: "",
    ownerId: id,
    amount: "",
    img: imgDef,
  };

  const [newProduct, setNewProduct] = useState(protoProduct);
  const [preview, setPreview] = useState(imgDef);

      const fileToDataUrl = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };
    



  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setNewProduct((prev) => ({ ...prev, img: event.target.files[0] }));

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      const dataUrl = await fileToDataUrl(file);
      setNewProduct((prev) => ({ ...prev, img: dataUrl }));
    } else {
      setPreview(imgDef);
    }
  };

  const handleAddProduct = () => {
    console.log(newProduct);
    dispatch(addNewGood(newProduct));
    dispatch(addUsersProduct({ id: id, productId: newProduct.id }));
    setNewProduct(protoProduct);
    setPreview(imgDef);
    navigate(`/profile/products/${id}`);
  };

  useEffect(() => {
    if (!id) {
      console.error("Missing product ID");
      navigate("/login"); // Перенаправить на страницу продуктов или показать ошибку
    }

    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [id, navigate, preview]);

  return (
    <div className="profile">
      <p className="profile__page-title">Make product</p>
      <div className="profile__make">
        <img src={preview} alt="" />
        <input type="file" onChange={handleImageChange} /> {/* accept="image/*" */}
        <input
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="title"
        />
        <textarea
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, body: e.target.value }))
          }
          type="text"
          placeholder="description"
        />
        <div className="inputs">
          <input
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, cost: e.target.value }))
            }
            type="number"
            placeholder="cost"
          />
          <input
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, amount: e.target.value }))
            }
            type="number"
            placeholder="amount"
          />
        </div>
      </div>
      <ButtonMint onClick={handleAddProduct} className="m-25">
        Make product
      </ButtonMint>
      <ButtonMint onClick={() => navigate(`/profile/${id}`)} className="m-25">
        Back
      </ButtonMint>
    </div>
  );
};

export default MakeCard;
