import { Header } from "../componentsGlobal/Header";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DATA_ORDER } from "../reducer/reducer";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../services/Routes";

const Order = () => {
  const { dataOrder } = useSelector((state) => state.crud),
    dispatch = useDispatch(),
    navigate = useNavigate(),
    [load, setLoad] = useState(false);

  const getOrder = async () => {
    const response = await getOrders();
    if (response.status == 200) {
      dispatch(DATA_ORDER(response.data.response));
      setLoad(true);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const toDetalleOrden = (e) => {
    let auxIndex = 0
    for (let index = 0; index < dataOrder.length; index++) {
      if (dataOrder[index].id == e.target.slot) {
        auxIndex = index
      }
      
    }
    navigate(`/home/order:${auxIndex}`);
  };

  return (
    <div>
      <Header></Header>
      {load ? (
        <div id="order">
          {dataOrder.map(({ id, order_code, last_update }) => (
            <div key={id}>
              <div>
                <h2>
                  codigo: {order_code} emitida: {last_update}
                </h2>
              </div>
              <div>
                <button slot={id} onClick={toDetalleOrden}>
                  Detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        load
      )}
    </div>
  );
};

export default Order;
