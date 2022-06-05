import Sidebars from "../components/Sidebars";
import Products from "../components/Products";
import { productsSliceActions } from "../redux/product";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Head from "next/head";

const HomePage = (props: any) => {
  const dispatch = useDispatch();
  let filters = useSelector((state: any) => state.products.filters);
  let priceFilter = useSelector((state: any) => state.products.priceFilter);
  let sorting = useSelector((state: any) => state.products.sortby);
  let sortingOrder = useSelector((state: any) => state.products.sortingOrder);
  let currentpage = useSelector((state: any) => state.products.currentPage);

  const fetchCategories = () => {
    dispatch(productsSliceActions.replaceCategories(props.result));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const filter = filters.length > 0 ? filters : null;
      const sort_order = sortingOrder ? "ASC" : "DESC";
      try {
        const data = await fetch(
          "https://e918w86n71.execute-api.us-east-1.amazonaws.com/prod/ferhat/getProducts",
          {
            method: "POST",
            body: JSON.stringify({
              categories: filter,
              maxPrice: priceFilter,
              sort_by: sorting,
              sorting_order: sort_order,
              page_number: currentpage,
            }),
          }
        );
        const result = await data.json();
        dispatch(productsSliceActions.replaceProducts(result.images));
        dispatch(productsSliceActions.replaceProductCount(result.allImages));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
    fetchProducts();
  }, [filters, priceFilter, sorting, sortingOrder, currentpage]);

  return (
    <Fragment>
      <Head>
        <title>Bejamas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Excellent Bejamas Corparation" />
      </Head>
      <div className={classes.container}>
        <aside>
          <Sidebars />
        </aside>
        <main>
          <Products />
        </main>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    "https://e918w86n71.execute-api.us-east-1.amazonaws.com/prod/ferhat/getCategories",
    {
      method: "POST",
    }
  );
  const result = await data.json();
  return {
    props: { result },
    revalidate: 1,
  };
}

export default HomePage;
