import {
  ContactContainer,
  Flex,
  TextAlignLeft,
} from "../styled-components/contact";

const Contact = () => {
  return (
    <ContactContainer>
      <div>
        <h2>Dane adresowe:</h2>
        <i className="fa fa-home"></i>
        <br />
        <br />
        <p>
          Pizzeria Raffaele
          <br />
          ul. Smakowita 1, <br />
          90-000 Łódź
        </p>
      </div>

      <div>
        <h2>Dane kontaktowe:</h2>
        <i className="fa fa-phone"></i>
        <br />
        <br />
        <p>
          Telefon:
          <br />
          42 600 00 00 <br />
          <br />
          E-mail:
          <br />
          pizzeriaraffaele@buziaczki.pl
        </p>
      </div>

      <div>
        <h2>Godziny otwarcia:</h2>
        <i className="fa fa-clock-o"></i>
        <br />
        <br />
        <Flex>
          <TextAlignLeft>
            poniedziałek
            <br />
            wtorek
            <br />
            środa
            <br />
            czwartek
            <br />
            piątek
            <br />
            sobota
            <br />
            niedziela
          </TextAlignLeft>
          <div>
            09:00 - 22:00
            <br />
            09:00 - 22:00
            <br />
            09:00 - 22:00
            <br />
            09:00 - 22:00
            <br />
            09:00 - 23:00
            <br />
            08:00 - 23:00
            <br />
            08:00 - 22:00
          </div>
        </Flex>
      </div>
    </ContactContainer>
  );
};

export default Contact;
