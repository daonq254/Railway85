// Action Thêm mới Account
// let actionAddNewAccount1 = {
//   type: "ADD_ACCOUNT",
//   account: {
//     id: 1,
//     username: "daonq1",
//     fullname: "Nguyen Dao 1",
//   },
// };

import { ADD_ACCOUNT } from "../Contants/accountActionType";

// //
// let actionAddNewAccount2 = {
//   type: "ADD_ACCOUNT",
//   account: {
//     id: 2,
//     username: "daonq2",
//     fullname: "Nguyen Dao 2",
//   },
// };

//
let actionAddNewAccount = (account_New) => {
  return {
    type: ADD_ACCOUNT,
    account: account_New,
  };
};

export { actionAddNewAccount };
