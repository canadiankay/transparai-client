import footerImage from "../../assets/images/footer.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerImage} alt="footer image" className="footer__image" />
    </footer>
  );
};

export default Footer;
