"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Demo
// import { Person, myname, myAge } from "./Person";+
var Person_1 = require("./Person");
// import logo from "./Person";
// var person1 = new Person();
// person1.id = 1;
// person1.name = "daonq1";
// person1.address = "HN";
// person1.setId(1);
// person1.setName("daonq1");
// person1.setAddress("HN");
// Person person1 = new Person();
var person1 = new Person_1.Person(1, "daonq1", "HN1");
// In thông tin của Person1
console.log("Thông tin của person1 là: ");
console.log("ID: " + person1.getId());
console.log("name: " + person1.getName());
console.log("address: " + person1.getAddress());
// console.log("Myname is: " + myname);
// console.log("MyAge is: " + myAge);
// console.log("LOGO VTI: " + logo);
//
// var person2 = new Person();
// person2.id = 2;
// person2.name = "daon2";
// person2.address = "HN2";
// person2.setId(2);
// person2.setName("daon2");
// person2.setAddress("HN2");
var person2 = new Person_1.Person(2, "daonq2", "HN2");
console.log("Thông tin của person2 là: ");
// console.log("ID: " + person2.id);
// console.log("name: " + person2.name);
// console.log("address: " + person2.address);
// console.log(
//   "ID: " + person2.id + "name: " + person2.name + "address: " + person2.address
// );
console.log("ID: ".concat(person2.getId(), " Name: ").concat(person2.getName(), " Address: ").concat(person2.getAddress()));
person1.goVTI();
person2.goVTI();
// Sử dụng hàm toString
console.log("Th\u00F4ng tin Person1: ".concat(person1.toString()));
console.log("Th\u00F4ng tin Person 2: ".concat(person2.toString()));
