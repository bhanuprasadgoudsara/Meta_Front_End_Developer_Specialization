// Don't Repeat Yourself !!
function myFunc() {
    console.log("Hello World!!");
}
myFunc();

var a = 10;
var b = 20;
var c = a + b;
console.log(c);

function addTwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addTwoNums();

function addTwoNums(a, b) {
    var c = a + b ;
    console.log(c);
}
addTwoNums(2,4);
addTwoNums(4,4);

function listArrayItems(arr) {
    for (var i = 0; i < arr.length ; i++ ) {
        console.log(i, arr[i]); //display the array item where the index is euqal to i
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
