//
let student = {
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

let { id: v_id, name: v_name, address: v_address } = student;

console.log(`ID: ${v_id}`);
console.log(`name: ${v_name}`);
console.log(`address: ${v_address}`);
// Array
let Railway85 = ["Hiển", "Đức", "Dũng"];

// let v_name1 = Railway85[0];
// let v_name2 = Railway85[1];
// let v_name3 = Railway85[2];
// Destructuring
let [v_name1, v_name2, v_name3] = Railway85;
console.log(`Railway85[0]: ${v_name1}`);
console.log(`Railway85[1]: ${v_name2}`);
console.log(`Railway85[2]: ${v_name3}`);

//
// let student = {
//     id: 1,
//     name: "daonq1",
//     address: "HN",
//     //   100 ...
//   };
// let student2 = {
//   id: 1,
//   name: "daonq1",
//   address: "HN",
//   gender: true,
//   class: "Railway 85",
// };

let student2 = {
  ...student,
  gender: true,
  class: "Railway 85",
};

// let Railway85_Update = ["Hiển", "Đức", "Dũng", "A", "B"];
let Railway85_Update = [...Railway85, "A", "B"];
