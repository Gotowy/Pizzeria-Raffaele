import { Link } from "react-router-dom";
import { FooterContainer, Logo, Socials } from "../styled-components/footer";

const Footer = ({ scrollTop }) => {
  return (
    <FooterContainer>
      <Link to="/pizzeria-raffaele/">
        <Logo onClick={scrollTop}>
          <span className="primary">Pi</span>zze
          <span className="secondary">ria</span>
          <br />
          <span className="primary">Ra</span>ffa
          <span className="secondary">ele</span>
        </Logo>
      </Link>
      <Socials>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="http://facebook.pl" target="_blank" rel="noreferrer">
          <i className="fa fa-facebook-f"></i>
        </a>
      </Socials>
      <p>Poczuj smak prawdziwej, włoskiej pizzy, gdziekolwiek jesteś.</p>
    </FooterContainer>
  );
};

export default Footer;
