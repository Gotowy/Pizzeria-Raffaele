import { useState } from "react";
import { Link } from "react-router-dom";
import button from "../img/button.png";
import {
  Header,
  MenuContainer,
  LogoContainer,
  Logo,
  MenuLink,
  MobileButton,
  MenuListMobile,
  Color,
} from "../styled-components/navMenu";

const MenuMobile = ({ scrollTop }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    isOpened ? setIsOpened(false) : setIsOpened(true);
  };

  const handleClick = () => {
    scrollTop();
    setIsOpened(false);
  };

  return (
    <Header>
      <nav>
        <MenuContainer>
          <LogoContainer>
            <Link to="/pizzeria-raffaele/">
              <Logo onClick={scrollTop}>
                <Color primary>Pi</Color>zze<Color>ria</Color>
                <br />
                <Color primary>Ra</Color>ffa<Color>ele</Color>
              </Logo>
            </Link>
          </LogoContainer>

          <MobileButton onClick={toggleMenu}>
            <img src={button} alt="button" height="50" />
          </MobileButton>

          <MenuListMobile isOpened={isOpened}>
            <li>
              <Link to="/pizzeria-raffaele/">
                <MenuLink onClick={handleClick}>Strona główna</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/pizzeria-raffaele/menu">
                <MenuLink onClick={handleClick}>Menu</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/pizzeria-raffaele/delivery">
                <MenuLink onClick={handleClick}>Dostawa</MenuLink>
              </Link>
            </li>
            <li>
              <Link to="/pizzeria-raffaele/contact">
                <MenuLink onClick={handleClick}>Kontakt</MenuLink>
              </Link>
            </li>
          </MenuListMobile>
        </MenuContainer>
      </nav>
    </Header>
  );
};

export default MenuMobile;
