import s from "./style.module.css";

import { useNavigate } from "react-router-dom";
import image from "../../assets/BookLogo.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Logo } from "../Logo/Logo";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          title={"Books"}
          subtitle={"Manage your Books"}
          image={image}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/book/new")}>
          Add New Book
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Header;
