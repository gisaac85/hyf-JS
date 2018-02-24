//1. Strings!
//1.1 Let's consider the following string: let myString = "hello,this,is,a,difficult,to,read,sentence"
//1.2 Add the string to your file and console.log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//1.4 Console.log the length of myString.
console.log(`The Length of String are: ${myString.length}`);
//1.5 The commas make that the sentence is quite hard to read. Find a way to remove the comma's from the sting and replace them with a spaces
//1.6 Console.log myString to see if you succeeded.
console.log(myString.replace(/,/g, ' '));

console.log("\n");

//2. Arrays!
//Consider the following array:
//let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//2.1 Add a statement that adds Mauro's favorite animal ('turtle') to the existing array
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
//2.2 Log your new array!
console.log(favoriteAnimals);
//2.3 Now add Jim's favorite animal to the array, its a 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");
//2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log("The New value of array is:['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'] ");
//2.5 Log your new new array!
console.log(favoriteAnimals);
//2.6 Log the length of the array, add a message: "The array has a length of: "(here you should show the length of the array)
console.log(`The array has a length of: ${favoriteAnimals.length}`);
//2.7 Jason does not like giraffes, delete this animal from the array
let animalIndex = favoriteAnimals.indexOf('giraffe');
if (animalIndex > -1) {
    favoriteAnimals.splice(animalIndex, 1);
}
//2.8 Again log your new array.
console.log(favoriteAnimals);

console.log("\n");
//2.9 Now if unlike Jim, you don't like meerkats and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
function removeArr(arr) {
    let whatToRemove, a = arguments,
        lengthArr = a.length,
        ax, indexWhatToRemove;
    while (lengthArr > 1 && arr.length) {
        whatToRemove = a[--lengthArr];
        indexWhatToRemove = arr.indexOf(whatToRemove);
        while ((ax = arr.indexOf(whatToRemove)) !== -1) {
            arr.splice(ax, 1);

        }

    }


    return arr, indexWhatToRemove;


}

//2.10 Log the index of meerkat to the console.Add a message so it says: "The item you are looking for is at index: "(here you should show the index of the item)

console.log("The item you are looking for is at index: " + removeArr(favoriteAnimals, 'meerkat'));
console.log(favoriteAnimals);

//More JavaScript 🎉
//1.Create a function that takes 3 arguments and returns the sum of the three arguments.
function sumThree(x, y, z) {
    return x + y + z;
}
//2.Create a function named colorCar that receives a color, and prints out, "a red car" for example.
function colorCar(color) {
    console.log(`a ${color} car`);
}

console.log("\n");
//3.Create an object and a function that takes the object as a parameter and prints out all of its names and values.
let student = {
    firstName: "Gaorieh",
    lastName: "Isaac",
    age: 33,
    result: function res() {
        return this.firstName + " " + this.lastName + " is: " + this.age + " years old.";
    }
};

console.log(student.result());

//OR

student.name = function () {
    return this.firstName + " " + this.lastName + " is: " + this.age + " years old.";
};
console.log(student.name());

console.log("\n");
//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code == 1) {
        code = "car";
    } else if (code == 2) {
        code = "motorbike";
    }
    return `a ${color} ${code}`;
}

console.log(vehicleType("red", 1));
console.log(vehicleType("blue", 2));

console.log("\n");
/*5.Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("true")
} else {
    console.log("false")
}
*/
console.log(3 === 3 ? "true" : "false");

console.log("\n");
//6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"
function vehicle(color, age, code) {
    if (code == 1) {
        code = "car";
    } else if (code == 2) {
        code = "motorbike";
    }
    switch (age) {
        case 1:
            age = "USED";
            break;
        case 2:
            age = "As Good As NEW";
            break;
        case 3:
            age = "NEW";
            break;

    };

    return `a ${color} ${age} ${code}`;
}
console.log(vehicle("red", 1, 2));


console.log("\n");
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehiclesList = [{
        type: "car"
    },
    {
        type: "caravan"

    },
    {
        type: "motorbike"
    }
];


function addvehicles(type) {

    vehiclesList.push({
        type
    });
}
addvehicles("toktok"); //add new vehicle
console.log(vehiclesList[3].type);


//8.How do you get the third element from that list?
console.log(vehiclesList[2]);

console.log("\n");
//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new caravan".
function vehicleNew(color, age, vList) {
    switch (age) {
        case 1:
            age = "USED";
            break;
        case 2:
            age = "As Good As NEW";
            break;
        case 3:
            age = "NEW";
            break;

    };


    let vv = vehiclesList[vList].type;

    return `a ${color} ${age} ${vv}`;
}
console.log(vehicleNew("green", 2, 2));

console.log("\n");
//10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function printAdvertisement() {

    let jj = "";


    for (let j = 0; j < vehiclesList.length - 1; j++) {
        if (vehiclesList[j].type.endsWith('s')) {
            jj += vehiclesList[j].type + 'es' + ',' + ' ';
        } else {
            jj += vehiclesList[j].type + 's' + ',' + ' ';
        }

    }
    if (vehiclesList[vehiclesList.length - 1].type.endsWith('s')) {
        jj += 'and ' + vehiclesList[vehiclesList.length - 1].type + 'es';
    } else {
        jj += 'and ' + vehiclesList[vehiclesList.length - 1].type + 's';
    }


    console.log("Amazing Joe's Garage, we service : " + jj + '.');
}

printAdvertisement();

console.log("\n");
//11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
addvehicles("Bus"); //Add new vehicle to the list.
printAdvertisement(); // print the advertisment with a new vehicle :) :)

console.log("\n");
//12.Create an empty object.
let myEmpty = {};
//13.Create an object that contains the teachers that you have had so far for the different modules.
//14.Add a property to the object you just created that contains the languages that they have taught you.
let myTeachers = {
    name: ["Gijs", "Maartje", "Kevin", "Mauro", "Philipe"],
    language: ["HTML", "CSS", "JAVASCRIPT"]

}
console.log(`Current course is ${myTeachers.language[2]} and the teacher is: ${myTeachers.name[3]} `);

console.log("\n");

//15.Write some code to test two arrays for equality using == and ===. Test the following:
/*
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
*/
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function arraysEqual(arr1, arr2) {
    // check the length
    if (arr1.length !== arr2.length)
        return false;
    //check the values
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    //check the type of values
    for (let j = arr1.length; j--;) {
        if (typeof arr1[j] !== typeof arr2[j])
            return false;
    }
    return true;

}

console.log("x==y >> " + arraysEqual(x, y));
console.log("z==y >> " + arraysEqual(z, y));
console.log("z==x >> " + arraysEqual(z, x));


console.log("\n");
//16.Take a look at the following code:
/*
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
*/
let o1 = {
    foo: 'bar'
};
let o2 = {
    foo: 'bar'
};
let o3 = o2;


function isEquivalent(a, b) {

    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}

console.log("o1 == o2 >> " + isEquivalent(o1, o2));
console.log("o2 == o1 >> " + isEquivalent(o2, o1));
console.log("o2 == o3 >> " + isEquivalent(o2, o3));
console.log("o3 == o2 >> " + isEquivalent(o3, o2));

o2.foo = 'bar11'; //changing a value of foo in o2 object
console.log("o3: " + o3.foo); // show o3
console.log("o2 changed now and foo is " + o2.foo + "... is o2 == o3 >> " + isEquivalent(o2, o3)); //compare o2,o3
console.log("o2 changed now and foo is " + o2.foo + "... is o3 == o2 >> " + isEquivalent(o3, o2)); //compare o3,o2

o1.foo = 'bar22'; //changing a value of foo in o1 object
console.log("o3: " + o3.foo); //show o3
console.log("o1 changed now and foo is " + o1.foo + "... is o1 == o3 >> " + isEquivalent(o1, o3)); //compare o1,o3
console.log("o1 changed now and foo is " + o1.foo + "... is o3 == o1 >> " + isEquivalent(o3, o1)); //compare o3,o1

console.log("\n");
//17.What does the following code return? (And why?)
let bar = 42;
console.log(typeof typeof bar);
console.log("Because typeof bar will return number and typeof a number is string :)");

///////////////////// END /////////////////////