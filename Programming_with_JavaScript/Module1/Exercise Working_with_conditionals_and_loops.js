//Excercise 1:
for (var i = 1; i < 11; i++){
    if (i == 1){
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        //this block will run if no condition matches
        console.log(i);   
    }  
}

//Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
for (var i = 1; i < 11; i++){
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}