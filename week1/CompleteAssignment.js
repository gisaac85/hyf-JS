// 1. Write a console.log statement saying "Hello World!" for each language that
// you know.
let languages = {
    russian: "Привет мир\!",
    italian: "Ciao mondo \!",
    catalan: "Hola món \!"
};
for (let hello in languages) {
    let value = languages[hello];
    console.log(value);
}

console.log('\n');

/* 2. Consider the following code:
console.log('I'm awesome');
Copy the code in
 * your .js file and run it.
You will see that you will get a SyntaxError.
Find
 * a solution for this error.
 */
console.log('I\'m awesome');
//OR
console.log("I'm Awesome");

console.log('\n');

/* 3. Declare a variable x and initialize it with an integer, using these exact
 * steps:
3.1 First, declare your variable x (do not initialize it yet).
 */
let x;
/* 3.2 Add a console.log statement that explains that explains in words what you
 * think the value of x is,
 */
console.log("the value of my variable x will be: undefined");
//3.3 Add a console.log statement that logs the value of x.
console.log("The value of x= " + x);
//3.4 Now initialize your variable x with an integer.
x = 10;
// 3.5 Next, add a console.log statement that explains what you think the value
// of x is.
console.log("the value of my variable x will be Now: 10");
//3.6 Add a console.log statement that logs the value of x:
console.log("The value of x= " + x);
console.log('\n');

//4. Declare a variable y and assign a string to it.
let y = "I'm C# programmer\!";
// 4.1 Write a console.log statement in which you explain in words what you
// think the value of the string is.
console.log("the value of my variable y will be: I'm C# programmer!");
//4.2 Now console.log the variable y.
console.log("The value of y= " + y);
//4.3 Now assign a new string to the variable y.
y = "But now I'm learning JavaScript\!";
// 4.4 Just like you did before write a console.log statement that explains in
// words what you think will be logged to the console.
console.log(
    "the value of my variable y will be: But now I'm learning JavaScript!"
);
//4.5 Now console.log y again.
console.log("The value of y= " + y);
console.log('\n');

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole
// number)?
//5.1 Declare a variable z and assign the number 7.25 to it.
let z = 7.25;
//5.2 Console.log z.
console.log("z= " + z);
// 5.3 Declare another variable a that has the value of z but rounded to the
// nearest integer.
let a = Math.round(z);
//5.4 Console.log a.
console.log("a= " + a);
// 5.5 So now we have z and a find a way to compare the two values and store the
// highest of the two in a new variable.
let max;
if (a > z) {
    max = a;
} else {
    max = z;
}
//5.6 Console.log the highest value.
console.log("The max= " + max);
console.log('\n');

//6. Arrays!
// 6.1 Declare an empty array.Make sure that the name you choose indicates
// 'plurality', because an array is capable of
let myFirstArray = [];
// 6.2 Write a console.log statement that explains in words what you think the
// value of the array is.
console.log("the value of Array will be: undefined");
//6.3 Console.log your array.
console.log(myFirstArray);
// 6.4 Create an array that has your favorite animals inside (see if you can
// find a good name that exactly describes what this variable will hold).
let favoriteAnimals = ["cat", "fish", "canary", "Dolphin"];
//6.5 Log your array.
console.log(favoriteAnimals);
// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the
// existing array.
favoriteAnimals.push("baby pig");
//6.7 Log your new array!
console.log(favoriteAnimals);
console.log('\n');

//7. More strings
//7.1 Let's consider the following string: let myString = "this is a test".
//7.2 Add the string to your file and console.log it.
let myString = "this is a test";
console.log(myString);
//7.3 Find a way to get the length of myString.
let strLength = myString.length;
//7.4 Console.log the length of myString.
console.log("The length of this string= " + strLength);
console.log('\n');

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
console.log("\n");

// 9. If x equals 7, and the only other statement is x = x % 3, what would be
// the new value of x?
x = 7;
x = x % 3;
console.log("7 % 3 = " + x);
// 9.1 Add at least 3 console.log statements in which you show that you
// understand what % does.
let num1 = 10,
    num2 = 20,
    num3 = 11;
str1 = "Not a Number";
num1 %= 2;
num2 %= 3;
num3 %= 4;
str1 %= 2;
console.log("10 % 2 = " + num1);
console.log("20 % 3 = " + num2);
console.log("11 % 4 = " + num3);
console.log("\"Not a Number\" % 2 = " + str1);

console.log("\n");

//10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an
// example that illustrates your answer.
let newArr10 = [1, 2, "Hello", false, 25.5];
console.log(newArr10);
console.log("\n");

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0?
// How can you test this?
if (isFinite(6) === isFinite(10)) {
    console.log("Infinites are equal");
} else {
    console.log("Infinites are NOT equal");
}
// 10.3 Add console.log statements to the above program's in which you show that
// you understand the concepts (just like you've done in the above assignments).