//10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an
// example that illustrates your answer.
let newArr10 = [1, 2, "Hello", false, 25.5];
console.log(newArr10);
console.log("\n");

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0?
// How can you test this?
function checkInf(i) {
    return i / 0;
}
if (checkInf(6) === checkInf(10)) {
    console.log("Infinites are equal");
} else {
    console.log("Infinites are NOT equal");
}