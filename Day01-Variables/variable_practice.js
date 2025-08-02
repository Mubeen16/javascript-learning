// Declare your full name, age, and city using `let`
let fulName = "Mubeen Rafeeqe";
//let age = 26;
let city = "London";

console.log("Hi, iam", + fulName + ", " + age + "years old from" + city);

// Create a const variable and try reassigning
const appName = "Zuhd"; 
// appName = "New App"; / ❌ Should throw an error
console.log("APP:", appName);

//Scope trap
if(true){
    let inside = "Block scopped";
    var outside = "Function scopped";
    console.log("Inside if-block", inside);

}
//console.log("No acess outside:", inside);// ❌ Error
console.log("Access outside:", outside); // ✅ Works

const tools = ["VS Code", "Git", "Chrome"];
tools.push("Postman"); //Allowed
tools[1] = "GitHub Desktop"; 

console.log("Tools:", tools);

// tools = ["Figma"]; // ❌ Not allowed – reassignment


//Task 7: Variable Naming Challenge
let celcius = 30;
let fehrenheit = (celsius * 9) / 5 +32;
console.log(celsius + "°C is " + fahrenheit + "°F");

console.log(celsius + "°C is " + fahrenheit + "°F");

