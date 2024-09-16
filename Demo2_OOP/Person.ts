// Khai báo class Person
export class Person {
  //   public id: number;
  //   public name: string;
  //   public address: string;
  private id: number;
  private name: string;
  private address: string;

  //   constructor
  //   public Person(id, name, address) {
  //     this.id = id;
  //     this.name = name;
  //     this.address = address;
  //   }

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  public setId(id: number) {
    this.id = id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  //   Khai báo phương thức goVTI()
  public goVTI() {
    console.log("Student go to VTI to Learn!!!");
  }

  //   viết hàm toString()
  public toString() {
    return `id: ${this.id}, name: ${this.name}, address: ${this.address}`;
  }
}

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
