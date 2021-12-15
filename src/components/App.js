

import "../styles/App.css";
import styled from "styled-components"
import {BrowserRouter,Route, Routes , Switch} from "react-router-dom"
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Board from "./Board";
import HeaderComponent from "./HeaderComponent";
import Index from "./login/Index";
import Signup from "./login/Signup";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import AdminTeamplate from "./templates/AdminTemplates/AdminTeamplate";





class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/header" component={HeaderComponent} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/" component={Index} />

            {/* <Route exact path="/board" component={Board}/> */}
            <Route
              exact
              path="/board"
              render={(propsRoute) => {
                return (
                  <Fragment>
                    <HeaderComponent />
                    <Board {...propsRoute} />
                  </Fragment>
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
