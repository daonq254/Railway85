//
var student = {
    id: 1,
    name: "daonq1",
    address: "HN",
    //   100 ...
};
// let v_id = student.id;
// let v_name = student.name;
// let v_address = student.address;
// Destructuring
// let { id: v_id } = student; //let v_id = student.id;
// let { name: v_name } = student; // let v_name = student.name;
// let { address: v_address } = student; // let v_address = student.address;
var v_id = student.id, v_name = student.name, v_address = student.address;
console.log("ID: ".concat(v_id));
console.log("name: ".concat(v_name));
console.log("address: ".concat(v_address));
// Array
var Railway85 = ["Hiển", "Đức", "Dũng"];
// let v_name1 = Railway85[0];
// let v_name2 = Railway85[1];
// let v_name3 = Railway85[2];
var v_name1 = Railway85[0], v_name2 = Railway85[1], v_name3 = Railway85[2];
console.log("Railway85[0]: ".concat(v_name1));
console.log("Railway85[1]: ".concat(v_name2));
console.log("Railway85[2]: ".concat(v_name3));
