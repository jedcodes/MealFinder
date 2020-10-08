import React from "react";
import "./Styles/_styles.scss";
import { Route, Switch } from "react-router-dom";
import { Breakfast, Dinner, Drinks, Home, Lunch } from "./Pages";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/breakfast" component={Breakfast} />
          <Route exact path="/lunch" component={Lunch} />
          <Route exact path="/dinner" component={Dinner} />
          <Route exact path="/drinks" component={Drinks} />
        </Switch>
      }
      {/* <Footer />*/}
    </div>
  );
};

export default App;
