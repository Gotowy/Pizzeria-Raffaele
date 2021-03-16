import styled from "styled-components";

export const Header = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 3;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 0 0 25px 0 #0008;
`;

export const MenuContainer = styled.div`
  background: #600;
  opacity: 0.97;

  @media (max-width: 1220px) {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  top: -7px;
  width: 250px;
  height: 70px;

  @media (max-width: 1220px) {
    flex-basis: calc(50% + 40px);
    top: -4px;
  }
`;

export const Logo = styled.div`
  font-family: "amarante";
  font-size: 32px;
  width: 220px;
  height: 90px;
  cursor: pointer;
  background: #000;
  border: #fffc 2px solid;
  border-radius: 5px 5px 90px 90px;
  margin: 4px;
`;

export const MenuLink = styled.span`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const MobileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background: #a00;
  opacity: 0.98;
  cursor: pointer;
`;

export const MenuListMobile = styled.ul`
  position: absolute;
  right: 0;
  bottom: -396px;
  background: #a00;
  padding: 20px 10px;
  border-radius: 2px 0 2px 40px;
  transition: all 0.4s ease-out;
  z-index: -1;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};

  li {
    padding: 27px 20px;
  }
`;

export const MenuListDesktop = styled.ul`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    padding: 20px 0;
    flex-basis: 25%;
  }
`;

export const Color = styled.span`
  color: ${({ theme, primary }) => (primary ? theme.primary : theme.secondary)};
  transition: all 1.5s ease-out;
`;
