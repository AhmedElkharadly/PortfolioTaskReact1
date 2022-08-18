import React from "react";
import Myhero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Myhero />
        <AboutMe />
        <Skills />
        <Portfolio/>
        <ContactUs />
      </div>
    );
  }
}

export default App;
