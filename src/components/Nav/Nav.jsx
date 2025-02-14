import './Nav.scss';
import cartIcon from "../../images/shopping-cart.svg"
import microsoft from "../../images/microsoft-logo.svg";
import searchIcon from "../../images/search-24px.svg";

function Nav() {
    return (
      <div className="nav">
        <section className="header-nav">
          <div className="nav-left">
            <img src={microsoft} alt="microsoft logo" className="nav-logo" />
            <hr/>
            <p className="nav-text">Small Business</p>
            <p className="nav-text">Surface</p>
            <p className="nav-text">Software</p>
          </div>
          <div className="nav-right">
            <p className="nav-text">All Microsoft</p>
            <p className="nav-text">Search <img src={searchIcon} alt="search icon" /></p>
            <p className="nav-text">Cart <img src={cartIcon} alt="cart icon" /></p>
          </div>
        </section>
        <div className="nav-subhead">
            <h2 className="nav-subhead__text">Find great deals for your business</h2>
        </div>
      </div>
    );
  }

export default Nav;