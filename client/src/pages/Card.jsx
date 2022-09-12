import { Header } from "../componentsGlobal/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NEW_ORDER_PRODUCTS } from "../reducer/reducer";

const Card = () => {
  const { dataCard } = useSelector((state) => state.crud),
    navigate = useNavigate(),
    dispatch = useDispatch();

  const totalCost = () => {
    let auxTotal = 0;
    for (let index = 0; index < dataCard.length; index++) {
      auxTotal = auxTotal + dataCard[index].priceTotal;
    }
    return auxTotal;
  };

  const toMakeOrder = (e) => {
    let product_list = [];
    for (let index = 0; index < dataCard.length; index++) {
      product_list.push({
        product_id: dataCard[index].data.id,
        qty: dataCard[index].repeat,
      });
    }
    dispatch(NEW_ORDER_PRODUCTS(product_list));
    navigate(`/home/createorder`);
  };

  return (
    <div>
      <Header />
      <div id="card">
        {dataCard.map(({ data, repeat, priceTotal }) => (
          <div key={data.id}>
            <div>
              <img src={data.image_url} alt="" />
            </div>
            <div>
              <div>
                <div>
                  <h1>{data.title}</h1>
                </div>
                <div>
                  <h1>Num. Productos: {repeat}</h1>
                </div>
              </div>
              <div>
                <div>
                  <h1>${parseInt(data.price) - parseInt(data.discount)} c/u</h1>
                </div>
                <div>
                  <h1>total ${priceTotal}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div id="total">
          <div>
            {" "}
            <h1>Total del Carrito: ${totalCost()}</h1>
          </div>
          <div>
            <button onClick={toMakeOrder}> Hacer Pedido </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
