// Global Scope
var myName = "daonq";

console.log(myName);

// function x
function x() {
  console.log(myName);
  // Local Scope
  var myAge = 20;
  console.log(myAge);
}
// console.log(myAge);
// function y
function y() {
  console.log(myName);
  //   console.log(myAge);
}
