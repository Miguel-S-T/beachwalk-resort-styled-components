import React, { Component } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/globals/GlobalStyle";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Home />
      </>
    );
  }
}

export default App;
