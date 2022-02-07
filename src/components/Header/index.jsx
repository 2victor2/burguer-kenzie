import "./styles.css";
import Logo from "../../images/logo.png";
import Search from "../Search";

const Header = () => (
  <header>
    <figure className="logo-container">
      <img src={Logo} alt="Burguer Kenzie" />
    </figure>
    <Search callback={() => console.log("oi")} />
  </header>
);

export default Header;
