import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Wrapper, Background, Pattern, Main } from "./styled-components/app";
import Footer from "./react-components/footer";
import Home from "./react-components/home";
import Menu from "./react-components/menu";
import Delivery from "./react-components/delivery";
import Contact from "./react-components/contact";
import MenuMobile from "./react-components/navMenuMobile";
import MenuDesktop from "./react-components/navMenuDesktop";

const theme = {
  primary: "#9c2",
  secondary: "#f33",
};

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1220;

  // const breakpoints = {
  //   mobile: { width: 0, height: 200 },
  //   tablet: { width: 620, height: 250 },
  //   laptop: { width: 960, height: 300 },
  //   desktop: { width: 1220, height: 400 },
  // };

  const backgroundHeight = () => {
    if (width >= 1220) return 400;
    if (width >= 960) return 300;
    if (width >= 620) return 250;
    return 200;
  };

  const scrollTop = () => {
    window.scrollTo({ top: backgroundHeight() });
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Background />

          {width > breakpoint ? (
            <MenuDesktop scrollTop={scrollTop} />
          ) : (
            <MenuMobile scrollTop={scrollTop} />
          )}
          <Pattern>
            <Main>
              <Switch>
                <Route exact path="/">
                  <Home scrollTop={scrollTop} />
                </Route>
                <Route path="/menu">
                  <Menu />
                </Route>
                <Route path="/delivery">
                  <Delivery />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </Main>
          </Pattern>
        </Wrapper>

        <Footer scrollTop={scrollTop} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
