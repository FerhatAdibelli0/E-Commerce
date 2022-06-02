import Sidebars from "../components/Sidebars";
import Products from "../components/Products";
import { productsSliceActions } from "../redux/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getAllProducts from "./api/products";
import getAllCaterories from "./api/categories";
import classes from "../styles/Home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      dispatch(productsSliceActions.replaceProducts(data));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getAllCaterories();
      dispatch(productsSliceActions.replaceCategories(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <main className={classes.container}>
      <Sidebars />
      <Products />
    </main>
  );
};

export default HomePage;


