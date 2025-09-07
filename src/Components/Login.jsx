import Logo from "./Logo";
import ButtonBlue from "./UI/button/ButtonBlue";
import InputReg from "./UI/input/InputReg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { users } = useSelector((store) => store.users);
  const navigate = useNavigate();

  const tryLogin = () => {
    const user = users.find((user) => user.email === inputs.email);
    if (!user) {
      console.log("нету почты");
      return;
    }
    if (user.password === inputs.password) navigate(`/profile/${user.id}`);
    else {
      console.log("нету пароля");
      return;
    }
  };

  return (
    <div className="login">
      <Logo />
      <form action="post">
        <p className="loginText">Log in</p>
        <InputReg
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          value={inputs.email}
          placeholder="email"
        />
        <InputReg
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          value={inputs.password}
          placeholder="password"
          type="password"
        />
      </form>
      <ButtonBlue className="w-15" onClick={tryLogin}>
        Log in
      </ButtonBlue>
      <Link to={"/signup"}>Sing up</Link>
    </div>
  );
};

export default Login;
