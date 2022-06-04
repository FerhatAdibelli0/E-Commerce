import classes from "./Paginator.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsSliceActions } from "../redux/product";
import { Fragment } from "react";

const paginator = (props: any) => {
  const prodCounts = useSelector((state: any) => state.products.productsCount);
  const ITEM_PER_PAGE = 4;
  const lastPage = Math.floor(prodCounts / ITEM_PER_PAGE);
  const currentpage = useSelector((state: any) => state.products.currentPage);
  const dispatch = useDispatch();

  const onNextHandler = () => {
    dispatch(productsSliceActions.onNextPage());
  };

  const onPrevHandler = () => {
    dispatch(productsSliceActions.onPreviousPage());
  };

  return (
    <Fragment>
      <div className={classes.paginator}>
        {props.children}
        <div className={classes.paginator__controls}>
          {currentpage > 0 && (
            <button
              className={classes.paginator__control}
              onClick={onPrevHandler}
            >
              Previous
            </button>
          )}
          {currentpage < lastPage && (
            <button
              className={classes.paginator__control}
              onClick={onNextHandler}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default paginator;
