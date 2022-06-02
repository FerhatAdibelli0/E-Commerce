import { uiSliceActions } from "./ui";
import { cartSliceActions } from "./cart";


export const sentCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.setNotification({
        status: "pending",
        title: "Pending ",
        message: "Request is sent ",
      })
    );

    const sentRequest = async () => {
      const request = await fetch(
        "https://ferhat-s-first-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity}),
        }
      );

      if (!request.ok) {
        throw new Error("Something wetn wrong!!!");
      }
    };

    try {
      await sentRequest();

      dispatch(
        uiSliceActions.setNotification({
          status: "success",
          title: "Success ",
          message: "Request is sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.setNotification({
          status: "error",
          title: "Error ",
          message: "Getting an failed",
        })
      );
    }
  };
};
