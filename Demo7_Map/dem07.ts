let number = [1, 3, 4, 6, 9];
// Bạn hãy tạo ra 1 mảng mới:number_new mà phần tử trong mảng mới này = phần tử trong mảng number bên trên + 5 đơn vị
// number_new = [6, 8, 9, 11, 14];

let number_new: Number[] = [];

// number.forEach((num) => {
//   let num_new = num + 5;
//   number_new.push(num_new);
// });

// map() ???
// number_new = number.map(function (num, idx) {
// console.log(`idx: ${idx}`);
//   return num + 9;
// });

number_new = number.map((num, idx) => num + 9);

console.log(`number_new: ${number_new}`);
