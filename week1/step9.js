// 9. If x equals 7, and the only other statement is x = x % 3, what would be
// the new value of x?
let x = 7;
x = x % 3;
console.log("7 % 3 = " + x);
// 9.1 Add at least 3 console.log statements in which you show that you
// understand what % does.
let num1 = 10,
    num2 = 20,
    num3 = 11;
let str1 = "Not a Number";
num1 %= 2;
num2 %= 3;
num3 %= 4;
str1 %= 2;
console.log("10 % 2 = " + num1);
console.log("20 % 3 = " + num2);
console.log("11 % 4 = " + num3);
console.log("\"Not a Number\" % 2 = " + str1);