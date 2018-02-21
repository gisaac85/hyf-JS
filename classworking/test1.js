let hyf = {
    studentClasses: [{
        "name": "class1",
        "students": ["Gaorieh", "Nour"]
    }]
};

function addNewClass(newClass) {
    hyf.studentClasses.push(newClass);

}
/*
addNewClass({
    "name": "class16",
    "students": ["Gaorieh", "Nour", "Hadeel", "Wael"]
});
*/

for (let i = 1; i < 10; i++) {

    addNewClass({
        "name": "class" + i,
        "students": ["Gaorieh", "Nour", "Hadeel", "Wael"]
    });
    // console.log(hyf.studentClasses[i]);
    console.log(hyf.studentClasses[i].name);
}
const evenArr = ['Isaac', 'Aya'];
const oddArr = ['Ahmed', 'Mauro'];
/*
for (let i = 0; i < 1000; i++) {
    let s = hyf.studentClasses[i];
    if (i % 2) {
        hyf.studentClasses = evenArr.concat(s);
    } else {
        hyf.studentClasses = oddArr.concat(s);
    }
}
*/

console.log(hyf.studentClasses.length);



/*
///////////////////////////////////////
function printMsg(msg, name) {
    return `${msg} @@ ${name}`;
}
console.log(printMsg("Hello", "ISAAC"));
///////////////////////////////////////
*/