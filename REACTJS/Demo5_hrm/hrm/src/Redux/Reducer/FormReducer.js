import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contant/FormActionType";

// Bước 3: Khai báo các State cần quản lý
let intinalState = {
  showForm: false,
  a: "daonq",
  b: "VTI",
  //   ...
};

// Bước 2: Khai báo ra Reducer
let formReducer = (state = intinalState, action) => {
  // Logic
  switch (action.type) {
    case SHOW_INPUT_FORM:
      //
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM:
      //
      return {
        ...state,
        showForm: false,
      };
    // case value:
    default:
      return { ...state };
  }
};

export { formReducer };