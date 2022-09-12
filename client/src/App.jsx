import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Card from "./pages/Card";
import Order from "./pages/Order";
import CreateOrder from "./pages/CreateOrder";
import DetalleOrder from "./pages/DetalleOrder";
//import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/product:id" element={<Product />} />
          <Route exact path="/home/card" element={<Card />} />
          <Route exact path="/home/order" element={<Order />} />
          <Route exact path="/home/order:id" element={<DetalleOrder />} />
          <Route exact path="/home/createorder" element={<CreateOrder />} />
          {/* <Route element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
