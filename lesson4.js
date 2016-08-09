console.group("Lesson 4: OOP in Javascript");
function Animal(type, name) {
    var _type = type;
    var _name = name;
    this.getType = function() {return _type;}
    this.setType = function(type) {_type = type;}
    this.getName = function() {return _name;}
    this.showName = function(){ console.log(this.name);}
}

var tiger = new Animal("Eat gress", "Gaia");
console.log(tiger.getType());
tiger.setType("Reset type Eat meat");
console.log(tiger.getType());


function Human(type, name) {
    this.name = name;
}

Human.prototype = new Animal();
var me = new Human("human eat meat", "viet anh");
me.showName();
console.groupEnd();