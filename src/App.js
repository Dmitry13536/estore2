import "./App.scss";
import Start from "./Components/Start";
import Login from "./Components/Login";
import { Route, Routes, HashRouter } from "react-router-dom";
import Singup from "./Components/Singup";
import Profile from "./Components/profile-pages/Profile";
import Settings from "./Components/profile-pages/Settings";
import MainPage from "./Components/MainPage";
import MyProducts from "./Components/profile-pages/MyProducts";
import MakeCard from "./Components/profile-pages/MakeCard";
import { useSelector } from "react-redux";
import CardPage from "./Components/CardPage";
import Cart from "./Components/profile-pages/Cart";


function App() {

  const { users } = useSelector((store) => store.users);
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/profile/:id" element={<Profile users={users} />} />
        <Route path="/profile/settings/:id" element={<Settings />} />
        <Route path="/main-page/:id" element={<MainPage />} />
        <Route
          path="/profile/products/:id"
          element={<MyProducts users={users} />}
        />
        <Route
          path="/profile/cart/:id"
          element={<Cart users={users} />}
        />
        <Route path="/main-page/:id/:productId" element={<CardPage />} />
        <Route path="/profile/products/make/:id" element={<MakeCard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
