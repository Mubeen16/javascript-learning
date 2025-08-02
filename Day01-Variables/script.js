let name = "Mubeen";
console.log("Hello", name)

// 🚀 Task 1: Declare name, age, and country
let naam = "Mubeen";
let age = 26;
let country = "UK";
console.log("My name is " + naam +", Iam " + age + "years old, from" + country)

// 🚀 Task 2: Change favorite food using let
let favouriteFood = "Pizaa";
console.log(" I love" + favouriteFood);
favouriteFood = "Pizza";
console.log("Now I love", + favouriteFood);

//  🚀 Task 3: Try to change a const
const pi = 3.14;
console.log("Value of PI");
//pi = 3.14159 // Uncomment this line to test the error

// 🚀 Task 4: Difference between var and let scope
if(true){
    var city = "London";
    let countryCode = "UK";
}
console.log("City(var):", city); //accessible
//console.log("Country Code", countryCode); not accessible 

// 🚀 Task 5: Declare a const array and change its values
const colors = ["red", "green", "blue"];
colors[0] = "yellow"; // allowed
colors.push("purple");
console.log(colors);
// colors = ["black", "white"]; // Not allowed - reassignement

//🚀 Task 6: Use let in a loop
for (let i=0; i<3; i++){
    console.log("Loop count", i);
}
// console.log(i); // ❌ Error — i is block-scoped


