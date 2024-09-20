// Xây dựng chương trình tính toán(máy tính)
// Hàm tính tổng
let sum = (a: number, b: number) => a + b;
// Hàm tính hiệu
let minus = (a: number, b: number) => a - b;
// Hàm tính phép nhân
let multiply = (a: number, b: number) => a * b;

// Sử dụng các hàm
let sum_a_b = sum(10, 20);
console.log(`Tổng 2 số là: ${sum_a_b}`);

let minus_a_b = minus(50, 20);
console.log(`Hiệu 2 số là: ${minus_a_b}`);

let multiply_a_b = multiply(10, 20);
console.log(`Phép nhân 2 số là: ${multiply_a_b}`);

//
let calculate = (a: number, b: number, f) => {
  let result = f(a, b);
  console.log(`Kết quả của phép tính là: ${result}`);
  //   return f();
};

//
console.log("Sử dụng hàm Calculate");

calculate(20, 30, sum);

calculate(20, 30, minus);

calculate(20, 30, multiply);
