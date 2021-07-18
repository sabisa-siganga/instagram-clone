import "../styles/navigation.scss";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.jpg";
import Menu from "./Menu.js";

function Navigation() {
    return(
        <div className="navigation">
             <div className="container">
                 <img className="logo" src={logo} alt="instagramlogo"/>
                 <div className="search">
                      <img className="searchIcon" src={searchIcon} alt="search-icon"/>
                      <span className="searchText">Search</span>
                 </div>
                 <Menu />
             </div>
        </div>
    );
}

export default Navigation;