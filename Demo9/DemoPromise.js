// Khai báo
let promiseCallAPI = new Promise(function (resolve, reject) {
    // Call API
    // Ajax
    // Code
    resolve("Call API Success!!");
    //   reject("Error when load API!!Check Again!!");
});
promiseCallAPI.then(function (msg_resolve) {
    // Xử lý nếu trả về Resolve
    console.log("Xử lý nếu trả về Resolve");
    console.log(msg_resolve);
}, function (msg_reject) {
    // Xử lý nếu trả về Reject
    console.log("Xử lý nếu trả về Reject");
    console.log(msg_reject);
});
