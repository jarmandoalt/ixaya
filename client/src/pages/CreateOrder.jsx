import { Header } from "../componentsGlobal/Header";
import { NEW_ORDER } from "../reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import { postOrder } from "../services/Routes";

const CreateOrder = () => {
  const { newOrder } = useSelector((state) => state.crud),
    dispatch = useDispatch();

  const handlerData = (e) => {
    const value = e.target.value,
      title = e.target.name;
    dispatch(NEW_ORDER({ title: title, value: value }));
  };

  const createOrder = async () => {
    await postOrder(newOrder);
  };

  return (
    <div>
      <Header></Header>
      <form id="create" onSubmit={createOrder}>
        <div>
          <h1>Rellena los siguientes datos</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Calle"
            name="street_name"
            onChange={handlerData}
            value={newOrder.street_name}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="C.P."
            name="zip_code"
            onChange={handlerData}
            value={newOrder.zip_code}
            pattern="[0-9]+"
            title='Solo ingresar numeros'
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Colonia"
            name="address"
            onChange={handlerData}
            value={newOrder.address}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Estado"
            name="state"
            onChange={handlerData}
            value={newOrder.state}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ciudad"
            name="city"
            onChange={handlerData}
            value={newOrder.city}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Telefono"
            name="phone"
            onChange={handlerData}
            value={newOrder.phone}
            pattern="[0-9]+"
            title='Solo ingresar numeros'
            required
          />
        </div>
        <div>
          <button type="submit">Confirmar Pedido</button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
