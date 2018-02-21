// 8. Write a program that checks the types of two variables and prints out SAME
// TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data
// types.
//8.2 For each variable write a console.log statement that logs the value.
let firstVar = 15; // integer
let secondVar = "Hello JavaScript..."; //string
let thirdVar = -3.5; //float
let fourthVar = {
    width: 50,
    height: 100
}; //object
let fifthVar = 20; // integer
let sixthVar = true; //boolean
console.log("The value of my variable firstVar is: " + firstVar);
console.log("The value of my variable secondVar is: " + secondVar);
console.log("The value of my variable thirdVar is: " + thirdVar);
console.log("The value of my variable fourthVar is: " + fourthVar);
console.log("The value of my variable fifthVar is: " + fifthVar);
console.log("The value of my variable fifthVar is: " + sixthVar);
// 8.3 Now write a console.log statement wherein you first explain in words what
// you think the type of your variables is.
console.log('\n');
console.log("The type of my variable firstVar is: INTEGER NUMBER");
console.log("The type of my variable secondVar is: STRING ");
console.log("The type of my variable thirdVar is: FLOAT NUMBER ");
console.log("The type of my variable fourthVar is: OBJECT ");
console.log("The type of my variable fifthVar is: INTEGER NUMBER ");
console.log("The type of my variable sixthVar is: BOOLEAN ");
//8.4 Now use typeof to log the actual type of your variables.
console.log('\n');
console.log("The type of my variable firstVar is: " + typeof firstVar);
console.log("The type of my variable secondVar is: " + typeof secondVar);
console.log("The type of my variable thirdVar is: " + typeof thirdVar);
console.log("The type of my variable fourthVar is: " + typeof fourthVar);
console.log("The type of my variable fifthVar is: " + typeof fifthVar);
console.log("The type of my variable sixthVar is: " + typeof sixthVar);
console.log('\n');
//8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are
// not the same type.
if (typeof firstVar === typeof secondVar) {
    console.log("firstVar and secondVar : SAME TYPE");
} else {
    console.log("firstVar and secondVar : NOT SAME TYPE");
}
if (typeof firstVar === typeof thirdVar) {
    console.log("firstVar and thirdVar : SAME TYPE");
} else {
    console.log("firstVar and thirdVar : NOT SAME TYPE");
}
if (typeof firstVar === typeof fourthVar) {
    console.log("firstVar and fourthVar : SAME TYPE");
} else {
    console.log("firstVar and fourthVar : NOT SAME TYPE");
}
if (typeof firstVar === typeof fifthVar) {
    console.log("firstVar and fifthVar : SAME TYPE");
} else {
    console.log("firstVar and fifthVar : NOT SAME TYPE");
}
if (typeof firstVar === typeof sixthVar) {
    console.log("firstVar and sixthVar : SAME TYPE");
} else {
    console.log("firstVar and sixthVar : NOT SAME TYPE");
}
console.log('\n');
if (typeof secondVar === typeof thirdVar) {
    console.log("secondVar and thirdVar : SAME TYPE");
} else {
    console.log("secondVar and thirdVar : NOT SAME TYPE");
}
if (typeof secondVar === typeof fourthVar) {
    console.log("secondVar and fourthVar : SAME TYPE");
} else {
    console.log("secondVar and fourthVar : NOT SAME TYPE");
}
if (typeof secondVar === typeof fifthVar) {
    console.log("secondVar and fifthVar : SAME TYPE");
} else {
    console.log("secondVar and fifthVar : NOT SAME TYPE");
}
if (typeof secondVar === typeof sixthVar) {
    console.log("secondVar and sixthVar : SAME TYPE");
} else {
    console.log("secondVar and sixthVar : NOT SAME TYPE");
}
console.log('\n');
if (typeof thirdVar === typeof fourthVar) {
    console.log("thirdVar and fourthVar : SAME TYPE");
} else {
    console.log("thirdVar and fourthVar : NOT SAME TYPE");
}
if (typeof thirdVar === typeof fifthVar) {
    console.log("thirdVar and fifthVar : SAME TYPE");
} else {
    console.log("thirdVar and fifthVar : NOT SAME TYPE");
}
if (typeof thirdVar === typeof sixthVar) {
    console.log("thirdVar and sixthVar : SAME TYPE");
} else {
    console.log("thirdVar and sixthVar : NOT SAME TYPE");
}
console.log("\n");
if (typeof fourthVar === typeof fifthVar) {
    console.log("fourthVar and fifthVar : SAME TYPE");
} else {
    console.log("fourthVar and fifthVar : NOT SAME TYPE");
}
if (typeof fourthVar === typeof sixthVar) {
    console.log("fourthVar and sixthVar : SAME TYPE");
} else {
    console.log("fourthVar and sixthVar : NOT SAME TYPE");
}
console.log("\n");
if (typeof fifthVar === typeof sixthVar) {
    console.log("fifthVar and sixthVar : SAME TYPE");
} else {
    console.log("fifthVar and sixthVar : NOT SAME TYPE");
}