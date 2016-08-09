console.group("Lesson 1: Object in Javascript");

// Creat Object using Object constructor
var person1 = new Object();
person1.firstName = "a";
person1.lastName = "b";
person1.showName = function() {
    console.log(this.firstName + this.lastName);
}
person1.showName();


// Create Object using Object Literal
var person2 = {
    firstName: "c",
    lastName: "d",
    showName: function() {
        console.log(this.firstName + this.lastName);
    },
    50: "Fifty"
}
person2.showName();

//Create object using Object Partern
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function() {
        console.log(this.firstName + this.lastName);
    }
}
var person3 = new Person("e", "f");
person3.showName();

// Create object using Prototype
function PersonP(firstName, lastName) {
    PersonP.prototype.firstName = firstName;
    PersonP.prototype.lastName = lastName;
    PersonP.prototype.showName = function() {
        console.log(this.firstName + this.lastName);
    }
}
var person4 = new PersonP("g", "h");
person4.showName();

//Access the property/method of the Object using Dot notation
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person2.firstName);
console.log(person2.lastName);
//console.log(person2.50); // Syntax Error
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person4.firstName);
console.log(person4.lastName);

//Access the property/method of the Object using Bracket Notation
console.log(person1['firstName']);
console.log(person1['lastName']);
console.log(person2['firstName']);
console.log(person2['lastName']);
console.log(person2['50']);
console.log(person3['firstName']);
console.log(person3['lastName']);
console.log(person4['firstName']);
console.log(person4['lastName']);

//Show all fields of the object
for (var field in person2) {
    console.log(field);
}

// add and remove the field of the object
delete person2['50'];
console.log(person2['50']);
person2['50'] = "Fifty again";
console.log(person2['50']);

// serialize/deserialize the object
var jsonSerialize = JSON.stringify(person2);
console.log(jsonSerialize);

var jsonString = '{"50":"Fifty again","firstName":"c1","lastName":"d1"}';
var person5 = JSON.parse(jsonString);
person5.showName = function() {
    console.log(this.firstName + this.lastName);
}
person5.showName();
console.groupEnd();