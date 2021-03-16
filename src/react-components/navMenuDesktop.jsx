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
              <Link to="/">
                <MenuLink onClick={scrollTop}>Strona główna</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <MenuLink onClick={scrollTop}>Menu</MenuLink>
              </Link>
            </li>
            <LogoContainer>
              <Link to="/">
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
              <Link to="/delivery">
                <MenuLink onClick={scrollTop}>Dostawa</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/contact">
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
