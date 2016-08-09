console.group("Lesson 3: Prototype");

var str = "axb";
String.prototype.duplicate = function() {
    return this + this;
}
console.log(str.duplicate());


var lover = new Person("Viet", "Anh");
//lover.love(); //ove is not a function
Person.prototype.love = function() {
    console.log(this.firstName + this.lastName + " Can Make love");
};
lover.love();


function SupperMan(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Exntend Persion using prototype
SupperMan.prototype = new Person();

var sm = new SupperMan("Minh", "Hoang");
sm.showName(); //showName is function of Person



function Wife() {
    this.cook = function(){
        console.log("Can Cooking");
    }
}

var ngocTrinh = new Wife();
ngocTrinh.cook();

Wife.prototype.makeLove = function() {
    console.log("Can make love");
}
ngocTrinh.makeLove();

Object.prototype.makeSandwich = function() {
    console.log("Can make sandwich");
}
ngocTrinh.makeSandwich();


for (var skill in ngocTrinh) {
    console.log("Skill:" + skill);
    ngocTrinh[skill]();
}


var mariaOzawa = null;
Object.prototype.karate = function(){
    console.log("karate him");
}
ngocTrinh.karate();
//mariaOzawa.karate(); // Cannot read property 'karate' of null

console.groupEnd();