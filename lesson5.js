console.group("Lesson 5: Bind/Call/Apply");

function log(level, time, message) {
    console.log(level + " - " + time + " : " + message);
}
// Using partial function
function logErrToday(message) {
    log("Error", "Today", message);
}
logErrToday("Error 505");

// Using bind
var logWarToday = log.bind(null, "Warning", "Today");
logWarToday("Can not build all");


// borrowing function
function test(first, second, third) {
    console.log(arguments); // argument is not array, just same as array but hot have prototype
    var args1 = Array.call(null, first, second, third);
    console.log(args1); // args1 is array
    var args2 = Array.apply(null, arguments);
    console.log(args2); // args2 is array
}

test(1, 2, 3);

// monkey-patching, spying
var computer = {
    accessWeb : function(address) {
        console.log("Go to: " + address);
    }
};

computer.accessWeb("code4newbie.blogspot.com");

var oldFunc = computer.accessWeb;
computer.accessWeb = function(address) {
    console.log("ready: " + address);
    oldFunc.apply(this, arguments);
    console.log("done: " + address);
}

computer.accessWeb("anhngv.blogspot.com");

console.groupEnd();