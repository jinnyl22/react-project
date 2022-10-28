import React from "react";
import { p_letter1 } from "../img";
import "../css/product_list.css";

const ProductList = () => {
  return (
    <div>
      <div className="product-container">
        {/* box에다가 상세페이지 링크 걸기!! */}
        <div className="product-box">
          <div className="product-top">
            <img src={p_letter1} alt="상품 이미지" />
          </div>
          <div className="product-bottom">
            <span className="product-name">후랑크 화분 포스터카드</span>
            <div className="product-price">
              {/* <span className="discount-rate">10%</span> */}
              <span className="price">2000</span>
              <span className="won">원</span>
            </div>
            {/* <div className="default-price">
                    <span>2000</span>
                    <span>원</span>
                </div> */}
            <p>후랑크가 그려진 어쩌고 저쩌고</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
