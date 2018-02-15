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