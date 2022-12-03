import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";
import { Container } from "./components/styles/Container.styled";
import React from "react";
import Header from "./components/Header";
import content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";

// we can put this theme object in different file , if it is big.
// wrap <ThemeProvider > around the whole element.
const theme = {
  color: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const cards = content.map((card, index) => {
  return <Card item={card} key={index} />;
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>{cards}</Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
