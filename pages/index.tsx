import Sidebars from "../components/Sidebars";
import Products from "../components/Products";
import { productsSliceActions } from "../redux/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "../styles/Home.module.css";
import { useSelector } from "react-redux";

// {
//     "categories": [
//         "ocean"
//     ],
//     "maxPrice": 15,
//     "sort_by": "name|price",
//     "sorting_order": "DESC|ASC",
//     "page_number": 0
// }

const HomePage = () => {
  const dispatch = useDispatch();
  let filters = useSelector((state: any) => state.products.filters);
  let priceFilter = useSelector((state: any) => state.products.priceFilter);
  let sorting = useSelector((state: any) => state.products.sortby);
  let sortingOrder = useSelector((state: any) => state.products.sortingOrder);
  let currentpage = useSelector((state: any) => state.products.currentPage);

  const fetchCategories = async () => {
    try {
      const data = await fetch(
        "https://e918w86n71.execute-api.us-east-1.amazonaws.com/prod/ferhat/getCategories",
        {
          method: "POST",
        }
      );
      const result = await data.json();
      dispatch(productsSliceActions.replaceCategories(result));
    } catch (err) {
      console.log(err);
    }
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
    <main className={classes.container}>
      <Sidebars />
      <Products />
    </main>
  );
};

export default HomePage;
