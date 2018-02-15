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