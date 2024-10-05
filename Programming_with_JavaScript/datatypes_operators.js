//DataTypes:
/*
1. String:
2. Number:
3. Boolean:
4. Null:
5. Undefined:
6. BigInt:
7. Symbol:
*/

//Operators:
/*
Aritmetic Operators:
1. Addition         => +
2. Subtraction      => -
3. Division         => /
4. Multiplication   => *

Comparsion Operators:
1. Greaterthan      => >
2. Lessthan         => <
3. Equal to         => ==
4. Not equal to     => !=

Logical Operators:
1. and              => &&
2. or               => ||
3. not              => !
*/
console.log(2+2);
console.log(1+2+3+4+5);
console.log(20-18);
console.log(2*3.1);
console.log(8/1);
console.log(3>2);
console.log(2>3);
console.log(10==10);

//Numbers:
/*
123
123
123.456
123.456
2+2
4
4-2
2
4*4
16
16/4
4
10**2
100
9%5
4
16%3
1
2*4+8
16
2*(4+8)
24
That's right! If parentheses are not used in a mathematical calculation, JavaScript will follow the standard mathematical sequence of calculation.  
*/

//String:
/*
empty string => '' or ""
non-empty string => 'hello there', "Hello there!!123"
error in string => 'hello
error in string => "hello
error in string => 'It's a lovely day'
correction: "It's a lovely day"
*/

//Boolean:
/*
1 < 2
true
1 > 2
false
1 == 2
false
var score = 100
undefined
score
100
100 == "100"
true
// == only compares the value not the type
undefined
// strict equality check for value and type => ===
undefined
100 === "100"
false
1 != 1
false
// strict inequality also check for value and type => !==
undefined
1 != "2"
true
1 !== '2'
true
1 !== '1'
true
1 != '1'
false
*/

//Additional operators
/*
Logical AND operator: && 
Logical OR operator: || 
Logical NOT operator: ! 
The modulus operator: % 
The equality operator: ==
The strict equality operator: ===
The inequality operator: !=
The strict inequality operator: !==
The addition assignment operator: += 
The concatenation assignment operator: += (it's the same as the previous one - more on that later)
*/
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
console.log(10 > 9 && 10 < 17);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
var petHungry = true;
petHungry = !petHungry; // permanently change the value stored in the petHungry variable from true to false
console.log(22 % 5); // modulus operator
console.log(5 !== "5")
//concatenation
a = "inter" + "net" // "internet"
b = "note" + "book" // "notebook"
//Combining strings and numbers using the + operator
c = 365 + " days" // "365 days"
d = 12 + " months" // "12 months"
//JavaScript tries to help by converting the numbers to strings, and then concatenating the number and the string together, ending up with a string value.
/*
The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". 
JavaScript coerces a number value to a string value - so that it can run the + operator on disparate data types.
*/
console.log(1 + "2")

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

//addition assignment operator or concatenation assignment operator:    
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

//concatenation assignment operator, +=
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


//Operator associativity determines how the precedence works when the code uses operators with the same precedence.
var num = 10; // the value on the right is assigned to the variable name on the left
console.log(5 > 4 > 3); // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`.
