import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import Axios from "axios";
import { addAccountNewAPI, getListAccountAPI } from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/DepartmentApi";
import { getListPositionAPI } from "../API/PositonApi";
import { useDispatch } from "react-redux";
import {
  actionCloseInputForm,
  actionShowInputForm,
} from "../Redux/Action/FormAction";

function AccountContainer(props) {
  // Khai báo 1 state để quản lý việc ẩn hiện của Modal
  // let [showForm, setShowform] = useState(false);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listAccount, setListAccount] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listDepartment, setListDepartment] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listPosition, setListPosition] = useState([]);
  //
  let dispatchRedux = useDispatch();
  // Khai báo hàm Callback
  let onHandleCreateButton = () => {
    //
    // console.log("Gọi hàm onHandleCreateButton");
    // setShowform(true);
    dispatchRedux(actionShowInputForm());
  };

  // Khai báo hàm Callback xử khi người dùng nhấn nút Close bên Modal
  let onHandleCloseModal = () => {
    //
    // setShowform(false);
    dispatchRedux(actionCloseInputForm());
  };
  // Khai báo hàm Callback xử khi người dùng nhấn nút Create New Account bên Modal
  let onHandleCreateNewAccount = (account_New) => {
    // console.log("account_New_AccountContainer: ", account_New);
    // listAccount.push(account_New);
    // setListAccount(listAccount);

    // Lưu trữ dữ liệu vào LocalStorage
    // localStorage.setItem("listAccount", JSON.stringify(listAccount));

    // Call API và thêm dữ liệu vào DB
    // let accountNew = {
    //   id: 1,
    //   email: Email,
    //   username: Username,
    //   fullname: Fullname,
    //   department: Department,
    //   postion: Postion,
    //   createDate: "16/10/2024",
    // };

    // API
    //   {
    //     "email": "daonq123_New@viettel.com",
    //     "username": "daonq123_New",
    //     "fullname": "daonq_New",
    //     "departmentId": "3",
    //     "positionId": "3"
    //    }

    addAccountNewAPI(account_New).then((res) => {
      // ...
      fetchListAccount();
    });

    // setShowform(false);
    dispatchRedux(actionCloseInputForm());
  };

  let fetchListAccount = () => {
    // Sử dụng Axios để call API, sử dụng Promise để xử lý bất đồng bộ:
    // Axios.get(`http://localhost:8080/api/v1/accounts`).then((res) => {
    //   // console.log("res: ", res);
    //   console.log("ListAccount_DB: ", res.data);
    //   let listAccount_API = res.data;
    //   setListAccount(listAccount_API);
    // });
    getListAccountAPI().then((res) => {
      setListAccount(res);
    });
  };

  let fetchListDepartment = () => {
    // Sử dụng Axios để call API, sử dụng Promise để xử lý bất đồng bộ:
    // Axios.get(`http://localhost:8080/api/v1/departments`).then((res) => {
    //   // console.log("res: ", res);
    //   console.log("ListDepartment_DB: ", res.data);
    //   let listDepartment_API = res.data;
    //   setListDepartment(listDepartment_API);
    // });
    getListDepartmentAPI().then((res) => {
      setListDepartment(res);
    });
  };

  let fetchListPosition = () => {
    // Sử dụng Axios để call API, sử dụng Promise để xử lý bất đồng bộ:
    // Axios.get(`http://localhost:8080/api/v1/possitions`).then((res) => {
    //   // console.log("res: ", res);
    //   console.log("possitions_DB: ", res.data);
    //   let listPossitions_API = res.data;
    //   setListPosition(listPossitions_API);
    // });
    getListPositionAPI().then((res) => {
      setListPosition(res);
    });
  };
  // Thực hiện khai báo useEffect, đoạn code trong useEffect này gọi khi component được mount
  useEffect(() => {
    // Load dữ liệu từ LocalStorage
    // if (localStorage && localStorage.getItem("listAccount")) {
    //   let listAccount_LocalStorage = JSON.parse(
    //     localStorage.getItem("listAccount")
    //   );
    //   //
    //   setListAccount(listAccount_LocalStorage);
    // }
    // Load dữ liệu từ DB, Call API
    fetchListAccount();
    fetchListDepartment();
    fetchListPosition();
  }, []);
  //
  return (
    <div>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount
        // showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      <ResultForm listAccount={listAccount} />
    </div>
  );
}

export default AccountContainer;
