

import "../styles/App.css";
import styled from "styled-components"
import {BrowserRouter,Route, Routes , Switch} from "react-router-dom"
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Board from "./Board";
import HeaderComponent from "./HeaderComponent";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Sider from "./templates/Sider";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";





class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/header" component={HeaderComponent} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/board"
              render={(propsRoute) => {
                return (
                  <Fragment>
                    <div className="row">
                      <div className="col-2">
                        <Sider/>
                      </div>
                      <div className="col-10">
                      <HeaderComponent />
                      <Board {...propsRoute} />
                      </div>
                    </div>
                    
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
