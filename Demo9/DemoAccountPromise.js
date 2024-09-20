// Step1:  Check Email
// Step2: Check Username
// Step3: CreateNewAccount
// Khai báo callAPICheckEmail
function callAPICheckEmail() {
    let promiseCheckEmail = new Promise(function (resolve, reject) {
        console.log("---Step1:  Check Email---");
        // $.ajax({
        // 	url: 'http://localhost:8080/api/v1/checkEmail/',
        // 	type: 'GET',
        // 	data: JSON.stringify(email),
        // 	contentType: "application/json",
        // 	success: function(data, textStatus, xhr) {
        // 		//data:true:có rồi, false
        // 		// 10s
        // 		if(data){
        // 			return
        // 		}
        // 	},
        // 	error(jqXHR, textStatus, errorThrown) {
        // 		alert("Error when loading data");
        // 		console.log(jqXHR);
        // 		console.log(textStatus);
        // 		console.log(errorThrown);
        // 	}
        //  });
        let data = false; // Email đã tồn tại
        if (data) {
            reject("This is Email Exists!!");
        }
        else {
            resolve("Check Email OK!!");
        }
    });
    return promiseCheckEmail;
}
// Khai báo callAPICheckUsername
function callAPICheckUsername() {
    let promiseCheckUsername = new Promise(function (resolve, reject) {
        console.log("---Step2:  Check Username---");
        let data = false; // Email đã tồn tại
        if (data) {
            reject("This is Username Exists!!");
        }
        else {
            resolve("Check Username OK!!");
        }
    });
    return promiseCheckUsername;
}
// Khai báo callAPICreateNewAccount
function callAPICreateNewAccount() {
    let promiseCreateNewAccount = new Promise(function (resolve, reject) {
        console.log("---Step3:  CreateNewAccount---");
        let status = true; // Email đã tồn tại
        if (status) {
            resolve("Create New Account Successfully!");
        }
        else {
            reject("An error has occurred!!");
        }
    });
    return promiseCreateNewAccount;
}
// Chạy
callAPICheckEmail()
    .then(function (msg_resolve) {
    console.log(msg_resolve);
    return callAPICheckUsername();
})
    .then(function (msg_resolve) {
    return callAPICreateNewAccount();
})
    .then(function (msg_resolve) {
    console.log(msg_resolve);
})
    .catch(function (msg) {
    console.log(msg);
});
