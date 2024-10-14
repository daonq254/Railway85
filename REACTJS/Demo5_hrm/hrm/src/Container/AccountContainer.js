import React, { useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  // Khai báo 1 state để quản lý việc ẩn hiện của Modal
  let [showForm, setShowform] = useState(false);

  // Khai báo hàm Callback
  let onHandleCreateButton = () => {
    //
    // console.log("Gọi hàm onHandleCreateButton");
    setShowform(true);
  };
  return (
    <div>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount showForm={showForm} />
      <ResultForm />
    </div>
  );
}

export default AccountContainer;
