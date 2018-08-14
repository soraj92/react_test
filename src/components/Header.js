import React, { Component } from "react";
import logo from "./img/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="top_header">
        <div className="header_row">
          <div className="header_column">
            <ul className="list">
              <li className="list_item">home</li>
              <li className="list_item">제품</li>
              <li className="list_item">자료실</li>
              <li className="list_item">솔루션</li>
              <li className="list_item">회사정보</li>
            </ul>
          </div>
          <div className="header_column">
            <img src={logo} alt="?" />
          </div>
          <div className="header_column">
            <a href="http://helpu.kr/01pair">
              <img
                className="banner"
                src="http://helpu.co.kr/images/sample_banner/banner_sample2_2.gif"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
