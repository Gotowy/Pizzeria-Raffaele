import styled from "styled-components";

export const Category = styled.div`
  margin: 40px 15px;
`;

export const Title = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  z-index: 1;
  border: #aaa outset 4px;
  border-radius: 10px;
  background: #fff;
  opacity: 0.95;
  color: #000;
  cursor: pointer;
  padding: 15px;
  box-shadow: 10px 7px 30px -20px #000;
`;

export const List = styled.ul`
  margin: 20px 0;
  display: ${({ isOpened }) => (isOpened ? "grid" : "none")};
  grid-template-columns: 1fr;
  gap: 20px;

  li {
    padding: 15px;
    opacity: 0.99;
    position: relative;

    & :after {
      content: "";
      background: #fff;
      opacity: 0.6;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
      border-radius: 7px;
    }
  }

  @media (min-width: 620px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1220px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Description = styled.p`
  height: 50px;
  font-size: 0.67rem;
  color: #777;
`;

export const Price = styled.span`
  font-size: 0.83em;
  border-bottom: 2px #777 dotted;
  cursor: help;
`;
