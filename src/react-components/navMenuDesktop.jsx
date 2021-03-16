import { Link } from "react-router-dom";
import {
  Header,
  MenuContainer,
  MenuLink,
  MenuListDesktop,
  LogoContainer,
  Logo,
  Color,
} from "../styled-components/navMenu";

const MenuDesktop = ({ scrollTop }) => {
  return (
    <Header>
      <nav>
        <MenuContainer>
          <MenuListDesktop>
            <li>
              <Link to="/pizzeria-raffaele/">
                <MenuLink onClick={scrollTop}>Strona główna</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/pizzeria-raffaele/menu">
                <MenuLink onClick={scrollTop}>Menu</MenuLink>
              </Link>
            </li>
            <LogoContainer>
              <Link to="/pizzeria-raffaele/">
                <Logo onClick={scrollTop}>
                  <Color primary>Pi</Color>zze
                  <Color>ria</Color>
                  <br />
                  <Color primary>Ra</Color>ffa
                  <Color>ele</Color>
                </Logo>
              </Link>
            </LogoContainer>
            <li>
              <Link to="/pizzeria-raffaele/delivery">
                <MenuLink onClick={scrollTop}>Dostawa</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/pizzeria-raffaele/contact">
                <MenuLink onClick={scrollTop}>Kontakt</MenuLink>
              </Link>
            </li>
          </MenuListDesktop>
        </MenuContainer>
      </nav>
    </Header>
  );
};

export default MenuDesktop;
