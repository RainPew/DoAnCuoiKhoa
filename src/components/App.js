

import "../styles/App.css";
import styled from "styled-components"
import {BrowserRouter,Route, Routes , Switch} from "react-router-dom"
import React, { Component } from "react";
import Board from "./Board";
import Header from "./Header"
import Index from "./login/Index";
import Signup from "./login/Signup";





class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/board" element={<Board />} />
          <Route exact path="/index" element={<Index />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
