import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import Navbar from "../../component/Navbar";

// import ProductCard from "./ProductCard.js";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

// const product = {
//   name: "Vivo",
//   images: [
//     {
//       url: "https://www.whatmobile.com.pk/admin/images/Xiaomi/Xiaomi11Lite5GNE-s.jpg",
//     },
//   ],
//   model: "vivo v20",
//   price: "RS  30, 000",
//   _id: "husnain",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />

      <MetaData title="Home Page" />
      {/* 
      <div className="banner">
        <p>Welcome to SmartMobiles</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>
 */}
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
