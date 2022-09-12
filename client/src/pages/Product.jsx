import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../services/Routes";
import { Header } from "../componentsGlobal/Header";
import {
  SHOW_NUMBER,
  DATA_CARD,
  COUNT_PRODUCTS,
  DATA_PRODUCT,
  UPDATE_DATA_CARD,
} from "../reducer/reducer";
import { useLocation } from "react-router-dom";

const Product = () => {
  const { dataProduct, countNumProducts, dataCard } = useSelector(
      (state) => state.crud
    ),
    dispatch = useDispatch(),
    [load, setLoad] = useState(false),
    [desComplete, setDesComplete] = useState(false),
    id = useLocation().pathname[14],
    productData = dataProduct[id];

  const addToCard = () => {
    dispatch(SHOW_NUMBER(false));
    dispatch(COUNT_PRODUCTS(countNumProducts + 1));
    let auxRepeat = false,
      auxIndex = 0;
    for (let index = 0; index < dataCard.length; index++) {
      if (dataCard[index].data.id == productData.id) {
        console.log("dentro");
        auxRepeat = true;
        auxIndex = index;
      }
    }
    if (auxRepeat) {
      dispatch(
        UPDATE_DATA_CARD({
          arrNum: auxIndex,
          repeat: dataCard[auxIndex].repeat + 1,
          priceTotal:
            dataCard[auxIndex].priceTotal +
            parseInt(productData.price) -
            parseInt(productData.discount),
        })
      );
    } else {
      dispatch(
        DATA_CARD({
          data: productData,
          repeat: 1,
          priceTotal:
            parseInt(productData.price) - parseInt(productData.discount),
        })
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getProducts();
    if (response.status == 200) {
      dispatch(DATA_PRODUCT(response.data.response));
      setLoad(true);
    }
  };

  const moreDes = () => {
    setDesComplete(true);
  };

  const minDes = () => {
    setDesComplete(false);
  };

  return (
    <div>
      <Header></Header>
      {load ? (
        <div id="product">
          <div>
            <img src={productData.image_url} alt="product" />
          </div>
          <div>
            <h1>{productData.title}</h1>
          </div>
          <div>
            <h3> sku: #{productData.id} </h3>
          </div>
          <div>
            <div>
              <h2> ${productData.price} </h2>
              <h2>
                {" "}
                ${parseInt(productData.price) -
                  parseInt(productData.discount)}{" "}
              </h2>
            </div>
          </div>
          <div>
            <button onClick={addToCard}> Añadir al Carrito </button>
          </div>
          {desComplete ? (
            <div id="descriptionProduct">
              <h2>
                {productData.description}
                <span
                  onClick={minDes}
                  style={{ color: "salmon", cursor: "pointer" }}
                >
                  {" "}
                  ...mostrar menos
                </span>
              </h2>
            </div>
          ) : (
            <div id="descriptionProduct">
              <h2>
                {productData.short_description}
                <span
                  onClick={moreDes}
                  style={{ color: "salmon", cursor: "pointer" }}
                >
                  {" "}
                  ...mostrar mas
                </span>
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div id="loadP">
            <h1>
                Cargando...
            </h1>
        </div>
      )}
    </div>
  );
};

export default Product;
