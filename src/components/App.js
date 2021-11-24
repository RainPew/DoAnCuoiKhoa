

import "../styles/App.css";
import styled from "styled-components"
import {BrowserRouter,Route, Routes , Switch} from "react-router-dom"
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Board from "./Board";
import Header from "./Header"
import Index from "./login/Index";
import Signup from "./login/Signup";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";





class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/header" component={Header} />
            <Route exact path="/Signup" component={Signup}/>
            <Route exact path="/" component={Index} />
            {/* <Route exact path="/board" component={Board}/> */}
            <Route exact path="/board" render={(propsRoute) => {
                return <Fragment>
                    <Header/>
                    <Board {...propsRoute}/>
                </Fragment>
         }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
