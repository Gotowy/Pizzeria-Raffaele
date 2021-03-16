//pizza images downloaded from dagrasso.pl (non-commercial use)
import margherita from "../img/menu/1.png";
import capriciosa from "../img/menu/2.png";
import havaii from "../img/menu/3.png";
import bocelli from "../img/menu/4.png";
import pavarotti from "../img/menu/5.png";
import romeo from "../img/menu/6.png";
import rari from "../img/menu/7.png";
import lambo from "../img/menu/8.png";
import carpeDiem from "../img/menu/9.png";
import laPizzaNostra from "../img/menu/10.png";
import vivaldi from "../img/menu/11.png";
import primavera from "../img/menu/12.png";
import sirQuattro from "../img/menu/13.png";
import dolce from "../img/menu/14.png";
import bannana from "../img/menu/15.png";
import soprano from "../img/menu/16.png";
import mafioso from "../img/menu/17.png";
import vesuvio from "../img/menu/18.png";
import vendetta from "../img/menu/19.png";
import { useState } from "react";
import {
  Category,
  Title,
  List,
  Description,
  Price,
} from "../styled-components/menu";

const Menu = () => {
  const initIsOpened =
    window.innerWidth > 960
      ? { first: true, second: true, third: true }
      : {
          first: false,
          second: false,
          third: false,
        };

  const [isOpened, setIsOpened] = useState(initIsOpened);

  const handleClick = (tab) => {
    isOpened[tab]
      ? setIsOpened({ ...isOpened, [tab]: false })
      : setIsOpened({ ...isOpened, [tab]: true });
  };

  return (
    <div>
      <Category>
        <Title onClick={() => handleClick("first")}>Pizza tradycyjna</Title>
        <List isOpened={isOpened.first}>
          <li>
            <img src={margherita} alt="MARGHERITA" />
            <p>1. MARGHERITA</p>
            <Description>
              sos z pomidorów z ziołami, dodatkowy ser cheddar
            </Description>
            <Price title="mała (28cm)/duża (42cm)">16zł/24zł</Price>
          </li>
          <li>
            <img src={capriciosa} alt="CAPRICIOSA" />
            <p>2. CAPRICIOSA</p>
            <Description>szynka, pieczarki</Description>
            <Price title="mała (28cm)/duża (42cm)">18zł/27zł</Price>
          </li>
          <li>
            <img src={havaii} alt="HAVAII" />
            <p>3. HAVAII</p>
            <Description>szynka, ananas</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={bocelli} alt="BOCELLI" />
            <p>4. BOCELLI</p>
            <Description>boczek, szynka, salami</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={pavarotti} alt="PAVAROTTI" />
            <p>5. PAVAROTTI</p>
            <Description>pepperoni, kabanos, świeża papryka</Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
          <li>
            <img src={romeo} alt="ROMEO" />
            <p>6. ROMEO</p>
            <Description>
              szynka, pieczarki, pomidory koktajlowe, lubczyk
            </Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={rari} alt="'RARI" />
            <p>7. 'RARI</p>
            <Description>
              salami, suszone pomidory, czarne oliwki, rukola
            </Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
          <li>
            <img src={lambo} alt="LAMBO" />
            <p>8. LAMBO</p>
            <Description>
              kebab jagnięcy, szynka, świeża papryka, cebula
            </Description>
            <Price title="mała (28cm)/duża (42cm)">24zł/36zł</Price>
          </li>
          <li>
            <img src={carpeDiem} alt="CARPE DIEM" />
            <p>9. CARPE DIEM</p>
            <Description>szynka, cebula, cukinia</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={laPizzaNostra} alt="LA PIZZA NOSTRA" />
            <p>10. LA PIZZA NOSTRA</p>
            <Description>
              bekon, salami, cebula, kukurydza konserwowa
            </Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
          <li>
            <img src={vivaldi} alt="VIVALDI" />
            <p>11. VIVALDI</p>
            <Description>
              4 smaki: kurczak, czarne oliwki, szynka, pieczarki
            </Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
        </List>
      </Category>

      <Category>
        <Title onClick={() => handleClick("second")}>Pizza wegetariańska</Title>
        <List isOpened={isOpened.second}>
          <li>
            <img src={primavera} alt="PRIMAVERA" />
            <p>12. PRIMAVERA</p>
            <Description>brokuły, cukinia, dodatkowy ser parmesan</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={sirQuattro} alt="SIR QUATTRO" />
            <p>13. SIR QUATTRO</p>
            <Description>
              sery: mozzarella, cheddar, parmesan, ricotta
            </Description>
            <Price title="mała (28cm)/duża (42cm)">18zł/27zł</Price>
          </li>
          <li>
            <img src={dolce} alt="DOLCE" />
            <p>14. DOLCE</p>
            <Description>
              słodki sos pomidorowy z ziołami, liście bazylii
            </Description>
            <Price title="mała (28cm)/duża (42cm)">16zł/24zł</Price>
          </li>
          <li>
            <img src={bannana} alt="BANNANA" />
            <p>15. BANNANA</p>
            <Description>banany, ananas, tofu</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
        </List>
      </Category>

      <Category>
        <Title onClick={() => handleClick("third")}>Pizza na ostro</Title>
        <List isOpened={isOpened.third}>
          <li>
            <img src={soprano} alt="SOPRANO" />
            <p>16. SOPRANO</p>
            <Description>pepperoni, świeża papryka, sos tabasco</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={mafioso} alt="MAFIOSO" />
            <p>17. MAFIOSO</p>
            <Description>pepperoni, papryka jalapeno, tabasco</Description>
            <Price title="mała (28cm)/duża (42cm)">20zł/30zł</Price>
          </li>
          <li>
            <img src={vesuvio} alt="VESUVIO" />
            <p>18. VESUVIO</p>
            <Description>
              szynka, świeża papryka, papryka jalapeno, tabasco
            </Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
          <li>
            <img src={vendetta} alt="VENDETTA" />
            <p>19. VENDETTA</p>
            <Description>
              pepperoni, papryka piri piri, tabasco, pieprz cayenne
            </Description>
            <Price title="mała (28cm)/duża (42cm)">22zł/33zł</Price>
          </li>
        </List>
      </Category>
    </div>
  );
};

export default Menu;
