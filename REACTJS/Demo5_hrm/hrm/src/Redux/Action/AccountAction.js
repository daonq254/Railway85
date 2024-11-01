import { getListAccountAPI } from "../../API/AccountApi";
import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";

export const actionFetchListAccountAPI = () => {
  return (dispatch) => {
    return getListAccountAPI().then((listAccountAPI) => {
      dispatch(actionFetchListAccountRedux(listAccountAPI));
    });
  };
};

//
// Action ẩn Input Form
export let actionFetchListAccountRedux = (listAccountAPI_param) => {
  return {
    type: FETCH_ACCOUNT_LIST,
    payload: listAccountAPI_param,
  };
};
