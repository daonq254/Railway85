import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";
function ModalCreateNewAccount(props) {
  // Destructuring
  let {
    // showForm,
    onHandleCloseModal,
    onHandleCreateNewAccount,
    listDepartment,
    listPosition,
  } = props;
  //
  let handleClose = () => {
    onHandleCloseModal();
  };
  //
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux: ", stateRedux);
  let showForm = stateRedux.formReducer.showForm;

  //

  return (
    <>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm
            onHandleCreateNewAccount={onHandleCreateNewAccount}
            listDepartment={listDepartment}
            listPosition={listPosition}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreateNewAccount;
