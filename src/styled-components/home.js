import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  text-align: left;
  max-width: 460px;

  span {
    text-align: center !important;
  }
`;

export const RightContainer = styled.div`
  margin: auto auto;
  margin-top: 40px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const PizzaFont = styled.div`
  font-family: "amarante";
  font-size: 48px;
`;

export const MenuBtn = styled.div`
  padding: 10px 20px;
  color: #000;
  border: #000 solid 2px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #000a;
    color: #ae4;
    border-color: transparent;
  }
`;
