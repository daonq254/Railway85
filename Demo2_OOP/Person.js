"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Khai báo class Person
var Person = /** @class */ (function () {
    //   constructor
    //   public Person(id, name, address) {
    //     this.id = id;
    //     this.name = name;
    //     this.address = address;
    //   }
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    //   Khai báo phương thức goVTI()
    Person.prototype.goVTI = function () {
        console.log("Student go to VTI to Learn!!!");
    };
    //   viết hàm toString()
    Person.prototype.toString = function () {
        return "id: ".concat(this.id, ", name: ").concat(this.name, ", address: ").concat(this.address);
    };
    return Person;
}());
exports.Person = Person;
// export var myname = "daonq";
// export var myAge = 18;
// var logoVTI = "VTI ACADEMY !!!";
// export default logoVTI;
// export { Person, myname, myAge };
// // Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "daonq1";
// person1.address = "HN";
// // Person person1 = new Person();
// // In thông tin của Person1
// console.log("Thông tin của person1 là: ");
// console.log("ID: " + person1.id);
// console.log("name: " + person1.name);
// console.log("address: " + person1.address);
