import React, { Component } from "react";
import PP_480BT from "./img/PP-480BT_main.png";
import PP_480D from "./img/PP-480D_main.png";
import PP_480E from "./img/PP-480E_main.png";
import ScanB from "./img/ScanB_main.png";
import PF_460D_1 from "./img/PF-460D_1.jpg";
import PF_460D_4 from "./img/PF-460D_4.jpg";
import PP_480E_1 from "./img/PP-480E_1.jpg";
import scanB2 from "./img/scanB.jpg";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="main_img">
          <div className="bxslider">
            <div className="main_img_item">
              <a href="#">
                <img src={PP_480BT} alt="" title="PP-480BT" />
              </a>
            </div>
            <div className="maig_img_item">
              <a href="#">
                <img src={PP_480D} alt="" title="PP-480D" />
              </a>
            </div>
            <div className="maig_img_item">
              <a href="#">
                <img src={PP_480E} alt="" title="PP-480E" />
              </a>
            </div>
            <div className="maig_img_item">
              <a href="#">
                <img src={ScanB} alt="" title="ScanB" />
              </a>
            </div>
          </div>
        </section>

        <section className="product_start">
          <div className="product_start_line"> </div>
          <span>Product Of Pair</span>
        </section>

        <section className="product">
          <div className="product_column">
            <div className="product_item">
              <img className="product_img" src={PF_460D_1} alt="?" />
              <span className="product_name">PP-480BT</span>
              <span className="product_price">160,000원</span>
              <div className="product_info">
                <i className="fas fa-info-circle fa-lg product_icon" />
                <span className="product_icon_text">상세내용</span>
              </div>
            </div>
          </div>
          <div className="product_column">
            <div className="product_item">
              <img className="product_img" src={PF_460D_4} alt="?" />
              <span className="product_name">PP-480D</span>
              <span className="product_price">160,000원</span>
              <div className="product_info">
                <i className="fas fa-info-circle fa-lg product_icon" />
                <span className="product_icon_text">상세내용</span>
              </div>
            </div>
          </div>
          <div className="product_column">
            <div className="product_item">
              <img className="product_img" src={PP_480E_1} alt="?" />
              <span className="product_name">PP-480E</span>
              <span className="product_price">160,000원</span>
              <div className="product_info">
                <i className="fas fa-info-circle fa-lg product_icon" />
                <span className="product_icon_text">상세내용</span>
              </div>
            </div>
          </div>
          <div className="product_column">
            <div className="product_item">
              <img className="product_img" src={scanB2} alt="?" />
              <span className="product_name">ScanB</span>
              <span className="product_price">160,000원</span>
              <div className="product_info">
                <i className="fas fa-info-circle fa-lg product_icon" />
                <span className="product_icon_text">상세내용</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
