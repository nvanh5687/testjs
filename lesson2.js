console.group("Lesson 2: The key word: \"this\"");

console.group("\"this\" is food object");
var food1 = {
    name: "orange",
    showName: function() {
        console.log(this.name);
    }
}
food1.showName();
console.groupEnd();

console.group("\"this\" is window object (global object)");
var foodName = "apple";
var realName = "mango";
var food2 = {
    realName: "lemon",
    showName: function() {
        console.log(this.foodName);
        console.log(foodName);
        console.log(this.realName);
        console.log(realName);
    }
}
food2.showName();

function showFoodName() {
    console.log(this.foodName);
}
window.showFoodName();
console.groupEnd();

console.group("Using \"this\" as callback parammeter")
console.log("Press button to show food...")
var food3 = {
    name: "strawberry",
    showName: function() {
        console.log(this.name);
    }
}

// "this" is button, bot food3
var btnShowFood3Name1 = document.getElementById("btnShowFood3Name1");
btnShowFood3Name1.addEventListener("click", food3.showName);

//fix it by using anonymous function
var btnShowFood3Name2 = document.getElementById("btnShowFood3Name2");
btnShowFood3Name2.addEventListener("click", function() {
    food3.showName();
})

//fix it by using "bind"
var btnShowFood3Name3 = document.getElementById("btnShowFood3Name3");
btnShowFood3Name3.addEventListener("click", food3.showName.bind(food3));
console.groupEnd();

console.group("Using \"this\" in anonymous function");
var testFriends = {
    yourName: "Viet Anh",
    friends: ["HUng", "Quy", "Mai"],
    showFriends: function() {
        for (var i = 0; i < this.friends.length; i++) {
            console.log(this.yourName + " have friend name " + this.friends[i]);
        }
    },
    showEachFriends: function() {
        this.friends.forEach(function(itmFriend) {
            console.log(this.yourName + " have friend name " + itmFriend);
        });
    },
    showEachFriendsFixed: function() {
        _this = this;
        this.friends.forEach(function(itmFriend) {
            console.log(_this.yourName + " have friend name " + itmFriend);
        });
    }
}
// Right
testFriends.showFriends();
//Wrong
testFriends.showEachFriends();
//Right
testFriends.showEachFriendsFixed();
console.groupEnd();

console.group("Using \"this\" for variable assigned by function");
var person6 = {
    firstName : "Viet",
    lastName : "Anh",
    showName : function(){
        console.log(this.firstName + this.lastName);
    }
}
//Wrong
var showNameFunc1 = person6.showName;
showNameFunc1(); //=> NaN

//Right
var showNameFunc2 = person6.showName.bind(person6);
showNameFunc2();

console.groupEnd();
console.groupEnd();