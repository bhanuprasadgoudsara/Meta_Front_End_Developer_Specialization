//if statement
/*
if (condition == true) {
    //Execute Code
}
*/

//if-else statement
/*
if (condition == true) {
    //Execute Code
}
else {
    //Execute Code
}
*/

//if-else if-else statement
/*
if (condition == true) {
    //Execute Code
}
else if ( condition == true) {
    //Execute Code
}
else {
    //Execute Code
}
*/
var result = 50 ;
if (result > 40) {
    console.log('You passed the test');
} else {
    console.log('You did not pass the test');
}

var place = 'third' ;
if (place == 'first') {
    console.log('God');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}

place = "second";
switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

var light = "red";
if(light == "green") {
    console.log("Drive");
} else if (light == "orange") {
    console.log("Get ready");
} else if (light == "red") {
    console.log("Don't drive");
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }