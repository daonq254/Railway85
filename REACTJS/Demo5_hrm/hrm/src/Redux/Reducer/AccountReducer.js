import { FETCH_ACCOUNT_LIST } from "../Contant/AccountActionType";

// Khai báo các State cần quản lý
let intinalState = {
  listAccount: [],
};

// Khai báo ra Reducer
let accountReducer = (state = intinalState, action) => {
  // Logic
  switch (action.type) {
    case FETCH_ACCOUNT_LIST:
      let listAcountAPI = action.payload;
      return {
        ...state,
        listAccount: listAcountAPI,
      };

    // case value:
    default:
      return { ...state };
  }
};

export { accountReducer };
