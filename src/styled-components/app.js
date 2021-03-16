import styled from "styled-components";
import pattern from "../img/backgrounds/ravenna.png"; /* Background pattern from Toptal Subtle Patterns */
import img1 from "../img/backgrounds/bg1.jpg";
import img2 from "../img/backgrounds/bg2.jpg";
import img3 from "../img/backgrounds/bg3.jpg";
import img4 from "../img/backgrounds/bg4.jpg";

export const Wrapper = styled.div`
  min-height: 88vh;
`;

export const Background = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-size: 100%;
  background: url(${img1});
  height: 200px;

  @media (min-width: 620px) {
    background: url(${img2});
    height: 250px;
  }
  @media (min-width: 960px) {
    background: url(${img3});
    height: 300px;
  }
  @media (min-width: 1220px) {
    background: url(${img4});
    height: 400px;
  }
`;

export const Pattern = styled.div`
  background: url(${pattern});
  position: relative;
  z-index: 2;
`;

export const Main = styled.main`
  padding: 40px 20px;
  margin: 0;
  width: calc(100vw - 57px);
  text-align: center;
  color: #111;
  font-size: 1.5rem;
  height: 100%;
  position: relative;
  z-index: 2;

  @media (min-width: 1220px) {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
