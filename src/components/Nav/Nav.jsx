import './Nav.scss';
import cartIcon from "../../images/shopping-cart.svg"
import microsoft from "../../images/microsoft-header.png";
import searchIcon from "../../images/search-24px.svg";
import chevronDown from "../../images/chevron-down-24px.png";
import chevronRight from "../../images/chevron_right-24px.svg";

function Nav() {
    return (
        <div className="nav">
            <section className="header-nav">
                <div className="nav-left">
                    <img src={microsoft} alt="microsoft logo" className="nav-left__logo" />
                    <ul className="nav-list">
                        <li className="nav-text">Small Business</li>
                        <li className="nav-text">Surface <img src={chevronDown} className="nav-text__logo" /></li>
                        <li className="nav-text">Software</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-list">
                        <li className="nav-text">All Microsoft <img src={chevronDown} className="nav-text__logo" /></li>
                        <li className="nav-text">
                            Search <img src={searchIcon} alt="search icon" className="nav-right__logos" />
                        </li>
                        <li className="nav-text">
                            Cart <img src={cartIcon} alt="cart icon" className="nav-right__logos" />
                        </li>
                    </ul>
                </div>
            </section>
            <div className="nav-subhead">
                <h2 className="nav-subhead__text">Find great deals for your business<img src={chevronRight} className="nav-subhead__logo" /></h2>
            </div>
        </div>
    );
}

export default Nav;