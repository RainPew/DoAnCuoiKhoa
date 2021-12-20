import React, { Component } from "react";
import "../styles/Header.css";
import {
  SearchOutlined,
  BellOutlined
} from "@ant-design/icons";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            PMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <a className="nav-link" href="/board">
                  Trang Chủ
                </a>
              </li> */}
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <div className="iconsearch">
                <SearchOutlined />
              </div>
            </form> */}
            <div className="iconsearch row">
              <div className="col-5">
                <SearchOutlined />
              </div>
              <div className="col-5">
                <BellOutlined />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
