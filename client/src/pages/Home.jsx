import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../services/Routes";
import { DATA_PRODUCT, SELECT_PRODUCT } from "../reducer/reducer";
import { useNavigate } from "react-router-dom";
import { Header } from "../componentsGlobal/Header";

const Home = () => {
  const [load, setLoad] = useState(false);

  const { dataProduct } = useSelector((state) => state.crud),
    dispatch = useDispatch(),
    navigate = useNavigate();

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

  const product = (e) => {
    if (e.target.slot == "6") {
      navigate(`/home/product:${"0"}`);
    } else {
      navigate(`/home/product:${e.target.slot}`);
    }
  };

  return (
    <div>
      <Header />
      <div id="targets">
        {load ? (
          dataProduct.map(
            ({ title, category, short_description, image_url, id }) => (
              <button onClick={product} key={id} slot={id} id="target">
                <div slot={id}>
                  <h1 slot={id}>{title}</h1>
                </div >
                <div slot={id}>
                  <h2 slot={id}>{category}</h2>
                </div>
                <div slot={id}>
                  <img slot={id} draggable="false" src={image_url} alt="" />
                </div>
                <div slot={id}>
                  <h2 slot={id}>{short_description}</h2>
                </div>
              </button>
            )
          )
        ) : (
          <div id="load">Cargando...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
