//Nested Loops:
for (var i = 1; i <= 2; i++) {       // outer loop
    for (var j = 1; j <=7; j++) {    // inner loop
        console.log("Week " + i + " day " + j);
    }
}

for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month=6; month < 9; month++) {
        console.log("------", month);
    }
}

//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}

//single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}