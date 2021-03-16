import { Link } from "react-router-dom";
import pizza from "../img/pizza.jpg";
import {
  HomeContainer,
  LeftContainer,
  RightContainer,
  PizzaFont,
  MenuBtn,
} from "../styled-components/home";

const Home = ({ scrollTop }) => {
  return (
    <HomeContainer>
      <LeftContainer>
        <PizzaFont>Pizzeria Raffaele</PizzaFont>
        <br />
        Oryginalna, włoska receptura, staranność oraz pasja z jaką zawsze
        wyrabiamy naszą pizzę, sprawiają, <br />
        że nie sposób przejść obok niej obojętnie. <br />
        <br />
        Nieprzeciętny aromat i wyjątkowy smak, których podstawą jest niezwykle
        lekkie i puszyste, włoskie ciasto oraz dokładnie wyselekcjonowane
        składniki najwyższej jakości, stanowią o tym, co tak mocno wyróżnia
        naszą pizzę.
        <br />
        <br />
        <span>
          Nie wierzysz? Przekonaj się sam! <br />
          <br />
        </span>
        <Link to="/pizzeria-raffaele/menu">
          <MenuBtn onClick={scrollTop}>SPRAWDŹ NASZE MENU</MenuBtn>
        </Link>
      </LeftContainer>
      <RightContainer>
        <img src={pizza} alt="pizza" />
      </RightContainer>
    </HomeContainer>
  );
};
export default Home;
