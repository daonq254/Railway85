var number = [1, 3, 4, 6, 9];
// Bạn hãy tạo ra 1 mảng mới:number_new mà phần tử trong mảng mới này = phần tử trong mảng number bên trên + 5 đơn vị
// number_new = [6, 8, 9, 11, 14];
var number_new = [];
// number.forEach((num) => {
//   let num_new = num + 5;
//   number_new.push(num_new);
// });
// map() ???
// number_new = number.map(function (num, idx) {
//   return num + 9;
// });
number_new = number.map(function (num, idx) { return num + 9; });
console.log("number_new: ".concat(number_new));
