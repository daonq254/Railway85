// Viết Function để tính tổng 2 số
// Cách 1
// function sum(a_param, b_param) {
//   return a_param + b_param;
// }

// Cách 2
// let v_sum = function (a_param, b_param) {
//   return a_param + b_param;
// };

// Cách 3: Arrow Function
// let v_sum = (a_param, b_param) => {
//   //
//   //
//   //
//   return a_param + b_param;
// };

let v_sum = (a_param, b_param) => a_param + b_param;

// console.log(`Tổng 2 số là: ${sum(10, 20)}`);
// console.log(`Tổng 2 số là: ${v_sum(10, 20)}`);
console.log(`Tổng 2 số là: ${v_sum(10, 20)}`);
