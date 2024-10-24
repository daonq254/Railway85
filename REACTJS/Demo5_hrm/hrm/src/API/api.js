import axios from "axios";

// Tạo thông tin cấu hình chung
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
  //   ...
});

// Hàm xử lý call API
export let api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((response) => {
      //   console.log("api");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
