async function callAPICheckEmail() {
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
  return data;
}

async function callAPICheckUsername() {
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
  let data = false; // Username đã tồn tại
  return data;
}

async function callAPICreateNewAccount() {
  console.log("---Step3:  CreateNewAccount---");
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
  let status = true; // Email đã tồn tại

  return status;
}

async function createNewAccount() {
  let resutCheckEmail = await callAPICheckEmail();
  if (!resutCheckEmail) {
    return;
  }
  //
  let resutCheckUsername = await callAPICheckUsername();
  if (!resutCheckUsername) {
    return;
  }
  //
  await callAPICreateNewAccount();
}

// Gọi hàm
createNewAccount();
