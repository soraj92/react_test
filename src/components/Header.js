import React, { Component } from "react";
import logo from "./img/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="top_header">
        <div className="header_row">
          <div className="header_column">
            <div className="nav_wrapper">
              <div className="spinner-master">
                <input type="checkbox" id="spinner-form" />
                <label for="spinner-form" className="spinner-spin">
                  <div className="spinner diagonal part-1" />
                  <div className="spinner horizontal" />
                  <div className="spinner diagonal part-2" />
                </label>
              </div>
              <nav id="menu" className="menu">
                <ul className="dropdown">
                  <li>
                    <a href="#Link" title="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Product">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="#Link" title="PP-480BT ">
                          PP-480BT
                        </a>
                      </li>
                      <li>
                        <a href="#Link" title="PP-480D">
                          PP-480D
                        </a>
                      </li>
                      <li>
                        <a href="#Link" title="PP-480E">
                          PP-480E
                        </a>
                      </li>
                      <li>
                        <a href="#Link" title="ScanB">
                          ScanB
                        </a>
                      </li>
                      <li>
                        <a href="#Link" title="SJ-4800D">
                          SJ-4800D
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Link" title="자료실">
                      자료실
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Solution">
                      Solution
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Company">
                      Company
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header_column logo">
            <img src={logo} alt="?" />
          </div>
          <div className="header_column helpu">
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
