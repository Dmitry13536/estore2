import { useEffect, useState } from "react";
import Logo from "./Logo";
import ButtonBlue from "./UI/button/ButtonBlue";
import InputReg from "./UI/input/InputReg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const Singup = () => {
  const protoUser = { name: "", surname: "", email: "", password: "", products:[], cart:[] };
  const [newUser, setNewUser] = useState(protoUser);
  const [repeatPassword, setRepeatPassword] = useState("");
  const {users} = useSelector((store)=>store.users);

  useEffect(()=>{
    console.log(users)
  }, [users])
  const dispatch = useDispatch();

  const handleRegUser = (e) => {
    e.preventDefault();

    if (Object.values(newUser).some((field) => !field)) {
      console.log("заполните все поля");
      return;
    }
    if (users.some((user) => user.email === newUser.email)) {
      console.log("Уже есть пользователь с этим email");
      return;
    }
    if (newUser.password !== repeatPassword) {
      console.log("пароли не совпадают");
      return;
    }
    console.log("Всё в порядке");
    dispatch(addUser(newUser));
    setNewUser(protoUser);
    setRepeatPassword("");
  };

  return (
    <div className="login">
      <p className="loginText singup">Sing up</p>
      <form>
        <InputReg
          type="text"
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, name: e.target.value }))
          }
          value={newUser.name}
          placeholder="Name"
        />
        <InputReg
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, surname: e.target.value }))
          }
          value={newUser.surname}
          placeholder="Surname"
        />
        <InputReg
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, email: e.target.value }))
          }
          value={newUser.email}
          placeholder="email"
        />
      </form>
      <form action="post">
        <InputReg
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, password: e.target.value }))
          }
          value={newUser.password}
          placeholder="Password"
          type="password"
        />
        <InputReg
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          placeholder="Repeat password"
          type="password"
        />
      </form>
      <ButtonBlue onClick={handleRegUser} className="w-15">
        Sing up
      </ButtonBlue>
      <Link to={"/login"}>Log in</Link>
    </div>
  );
};

export default Singup;
