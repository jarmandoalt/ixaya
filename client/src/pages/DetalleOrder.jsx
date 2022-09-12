import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../componentsGlobal/Header";

const DetalleOrder = () => {
  const { dataOrder } = useSelector((state) => state.crud),
    auxId = useLocation().pathname[12],
    orderSelect = dataOrder[auxId],
    productosList = orderSelect.products;

  return (
    <div>
      <Header></Header>
      <div id="detalle">
        <div>
          <h1>Informacion de entrega</h1>
        </div>
        <div>
          <h2>Numero de orden: {orderSelect.order_code}</h2>
        </div>
        <div>
          <h2>
            Calle: {orderSelect.street_name}        C.P.: {orderSelect.zip_code}
          </h2>
        </div>
        <div>
          <h2>Colonia: {orderSelect.address}</h2>
        </div>
        <div>
          <h2>Ciudad: {orderSelect.city}</h2>
        </div>
        <div>
          <h2>Estado: {orderSelect.state}</h2>
        </div>
        <div>
          <h1>Informacion de Producto</h1>
        </div>
        <div>
          {productosList.map(({ title, id, image_url, price, discount }) => (
            <div id="productOrder" key={id}>
              <div>
                <img src={image_url} alt="" />
              </div>
              <div>
                <h2>{title}</h2>
                <h2>${parseInt(price) - parseInt(discount)}</h2>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>Total: ${orderSelect.total}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetalleOrder;
