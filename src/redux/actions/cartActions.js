import { setCookie } from "../../helpers/cookies";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_GET_NUMBER } from "./types";

export const addToCart = (product, qty) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        productId: product.id,
        productName: product.name,
        productGallery: product.gallery,
        productPrices: product.prices,
        qty,
      },
    });

    const {
      cart: { cartItems },
    } = getState();
    setCookie("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });

  const {
    cart: { cartItems },
  } = getState();
  setCookie("cartItems", JSON.stringify(cartItems));
};

export const getNumbersOfItems = () => {
  return (dispatch) =>
    dispatch({
      type: CART_GET_NUMBER,
    });
};