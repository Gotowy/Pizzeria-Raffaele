import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 6vh;
  text-align: center;
  padding: 3vh 0;
  background: #111a;
  font-size: 0.875em;
`;

export const Logo = styled.div`
  font-family: "amarante";
  font-size: 32px;
  text-align: center;
  cursor: pointer;

  span {
    color: #fff;
    transition: all 1.5s ease-out;
  }
  &:hover .primary {
    color: ${({ theme }) => theme.primary};
  }
  &:hover .secondary {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Socials = styled.i`
  i {
    margin: 20px;
    font-size: 32px !important;
    transition: all 0.3s ease-out;
  }
  & .fa-twitter:hover {
    color: #4af;
    cursor: pointer;
  }
  & .fa-facebook-f:hover {
    color: #47b;
    cursor: pointer;
  }
`;
