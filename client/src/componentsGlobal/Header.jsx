import { useState, useEffect } from "react";
import card from "../assets/shopping-cart(1).svg";
import order from "../assets/clipboard(1).svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { showNumCard, countNumProducts } = useSelector((state) => state.crud),
    navigate = useNavigate();

  const toCard = (e) => {
    navigate(`/home/card`);
  };

  const toHome = (e) => {
    navigate(`/home`);
  };

  const toOrden = (e) => {
    navigate(`/home/order`);
  };

  return (
    <div id="header">
      <div>
        <button onClick={toHome}>myStore</button>
      </div>
      <div>
        <div>
          <button onClick={toOrden}>
            <img src={order} alt="" />
          </button>
        </div>
        <div>
          {showNumCard ? <h2 onClick={toCard}> {countNumProducts} </h2> : <div></div>}
          <button onClick={toCard}>
            <img src={card} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
