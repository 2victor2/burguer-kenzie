import "./styles.css";
import Logo from "../../images/logo.png";
import Search from "../Search";

const Header = ({userSearch,setUserSearch,filter}) => (
  <header>
    <figure className="logo-container">
      <img src={Logo} alt="Burguer Kenzie" />
    </figure>
    <Search userSearch={userSearch} setUserSearch={setUserSearch} callback={filter} />
  </header>
);

export default Header;
