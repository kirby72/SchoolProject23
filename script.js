/*

Title:

Program Element List (10 Most Complex Concepts / Syntax used):

Teammates Kyle (Github Repo Owner, Leader ig) (Author, Role)

Version:53

Date (Last Updated)
*/

//beginning of Program

// variable declaration
let t = 5; //let can be changed
const earth = 'round'; // const is permanent

let c = false;  
let f = false; 
let k = false;
let fahrenheit;
let celsius;
let kelvin;

let isComplete = false; 




//Title Screen (Ascii Art) Part 1 UI/UX 
console.log(
`######  ##    ## ##    ##    ######## ######## ##     ## ########  ######## ########     ###    ######## ##     ## ########  ########     
##    ## ###   ## ###   ##       ##    ##       ###   ### ##     ## ##       ##     ##   ## ##      ##    ##     ## ##     ## ##          
##       ####  ## ####  ##       ##    ##       #### #### ##     ## ##       ##     ##  ##   ##     ##    ##     ## ##     ## ##         
##       ## ## ## ## ## ##       ##    ######   ## ### ## ########  ######   ########  ##     ##    ##    ##     ## ########  ######      
##       ##  #### ##  ####       ##    ##       ##     ## ##        ##       ##   ##   #########    ##    ##     ## ##   ##   ##             
##    ## ##   ### ##   ###       ##    ##       ##     ## ##        ##       ##    ##  ##     ##    ##    ##     ## ##    ##  ##            
 ######  ##    ## ##    ##       ##    ######## ##     ## ##        ######## ##     ## ##     ##    ##     #######  ##     ## ######## 
 
  ######   #######  ##    ## ##     ## ######## ########  ######## ######## ########  
 ##    ## ##     ## ###   ## ##     ## ##       ##     ##    ##    ##       ##     ## 
 ##       ##     ## ####  ## ##     ## ##       ##     ##    ##    ##       ##     ## 
 ##       ##     ## ## ## ## ##     ## ######   ########     ##    ######   ########  
 ##       ##     ## ##  ####  ##   ##  ##       ##   ##      ##    ##       ##   ##
 ##    ## ##     ## ##   ###   ## ##   ##       ##    ##     ##    ##       ##    ##
  ######   #######  ##    ##    ###    ######## ##     ##    ##    ######## ##     ##  ` )

//Introduction (Summary) Part 2 UI/UX 

//Explanation (Rules, Instructions, Controls, Navigate, Manage User Expectations) Part 3 UI/UX
console.log("Welcome to CNN, how can we help you?");

//User Input Part 4 UI/UX

//Reiterate User Input Part 4.5 UI/UX

alert("Hello I'm an alert box!!");

let person = prompt("Please enter your name", "Really Cool Person");

if (person != null) {
  document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}


let celsius = Number(prompt("Please enter your temperature in Celsius", 0));
let fahrenheit = Math.floor(celsius * 9 / 5 + 32);
let kelvin = celsius + 273;


 //Save Load Options (Main) Part 5
  
  






//Output Part 6 Should play after all the stuff first
if (celsius && fahrenheit && kelvin ) {
  if ( celsius >= -21) {
  console.log(`So ${person}, that temperture is REALLY COLD like ARCTIC COLD!!, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if (-20 >= celsius >= -11) {
  console.log(`So ${person}, that temperture is REALLY COLD you definitly need a jacket!, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if (-10 >= celsius >= -1) {
  console.log(`So ${person}, that temperture is really cold, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if (0 >= celsius >= 9) {
  console.log(`So ${person}, that temperture is pretty cold, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
} 
else if (10 <= celsius <= 19) {
  console.log(`So ${person}, that temperture is a little cold, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if (30 >= celsius >= 20) {
  console.log(`So ${person}, that temperture is pretty warm, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if ( 40 >= celsius >= 31) {
  console.log(`So ${person}, that temperture is really warm, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
else if ( celsius >= 41) {
  console.log(`WOW ${person}, that temperture is REALLY HOT like DESERT HOT!!, that in Celcius is: ${celsius} in Fahrenheit is: ${fahrenheit} and in Kelvin is: ${kelvin}	`);
}
} 
else {
  console.log("error please try again!" )
  console.error("undefined variables")
}

//Thank you message Part 7
console.log("Thanks, PAtronage, discounts warm fuzzy msg make feel good and come back for more");













//Ending of Program

/*

Notes:




Test Code: 







*/
