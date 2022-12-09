import axios from "axios";
import {
  PRODUCTION_LIST_REQUEST,
  PRODUCTION_LIST_SUCCESS,
  PRODUCTION_LIST_FAIL,
} from "../constant/productConstant";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTION_LIST_REQUEST,
    });
    const { data } = await axios.get("localhost:5000/api/product");
    dispatch({
      type: PRODUCTION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTION_LIST_FAIL,

      payload: error.response,
    });
  }
};
