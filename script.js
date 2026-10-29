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

let _c = false;  
let _f = false; 
let _k = false;
let fahrenheit;
let celsius;
let kelvin;

let isComplete = false; 

const dofunction1 = () => {
  _c = true;
  _f = false;
  _k = false;
  console.log("Celcius selected");
};

const dofunction2 = () => {
  _c = false;
  _f = true;
  _k = false;
  console.log("Fahrenheit selcted");
};

const dofunction3 = () => {

  _c = false;
  _f = false;
  _k = true
  console.log("Kelvin selected");
};

const dofunction4 = () => {

  document.getElementById("hehe").innerHTML = "WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS";
};












//Title Screen (Ascii Art) Part 1 UI/UX 
console.log(
`######  ##    ## ##    ##    ######## ######## ##     ## ########  ######## ########     ###    ######## ##     ## ########  ########     ######   #######  ##    ## ##     ## ######## ########  ######## ######## ########  
##    ## ###   ## ###   ##       ##    ##       ###   ### ##     ## ##       ##     ##   ## ##      ##    ##     ## ##     ## ##          ##    ## ##     ## ###   ## ##     ## ##       ##     ##    ##    ##       ##     ## 
##       ####  ## ####  ##       ##    ##       #### #### ##     ## ##       ##     ##  ##   ##     ##    ##     ## ##     ## ##          ##       ##     ## ####  ## ##     ## ##       ##     ##    ##    ##       ##     ## 
##       ## ## ## ## ## ##       ##    ######   ## ### ## ########  ######   ########  ##     ##    ##    ##     ## ########  ######      ##       ##     ## ## ## ## ##     ## ######   ########     ##    ######   ########  
##       ##  #### ##  ####       ##    ##       ##     ## ##        ##       ##   ##   #########    ##    ##     ## ##   ##   ##          ##       ##     ## ##  ####  ##   ##  ##       ##   ##      ##    ##       ##   ##   
##    ## ##   ### ##   ###       ##    ##       ##     ## ##        ##       ##    ##  ##     ##    ##    ##     ## ##    ##  ##          ##    ## ##     ## ##   ###   ## ##   ##       ##    ##     ##    ##       ##    ##  
 ######  ##    ## ##    ##       ##    ######## ##     ## ##        ######## ##     ## ##     ##    ##     #######  ##     ## ########     ######   #######  ##    ##    ###    ######## ##     ##    ##    ######## ##     ##  ` )
//Introduction (Summary) Part 2 UI/UX 

//Explanation (Rules, Instructions, Controls, Navigate, Manage User Expectations) Part 3 UI/UX
console.log("Welcome to CNN, how can we help you?");

//User Input Part 4 UI/UX
document.getElementById("btnC").onclick = dofunction1;
document.getElementById("btnF").onclick = dofunction2;
document.getElementById("btnK").onclick = dofunction3;
document.getElementById("Acdl").onclick = dofunction4;
//Reiterate User Input Part 4.5 UI/UX

alert("Hello I'm an alert box!!");

let person = prompt("Please enter your name", "Really Cool Person");

if (person != null) {
  document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}


//Save Load Options (Main)

if (_c)
{
let fahrenheit = Math.floor(celsius*9/5);
let celsius = prompt("Please enter your temperature in Celsius", "0");
let kelvin = celsius+273;
alert(prompt("Please enter your temperature in Celsius", "0") );
}
else if (_k)
{
let fahrenheit = Math.floor(celsius*9/5);
let celsius = kelvin-273;
let kelvin = prompt("Please enter your temperature in Kelvin", "0" );
alert(prompt("Please enter your temperature in Kelvin", "0" ) );
}
else if (_f)
{
let fahrenheit = prompt("Please enter your temperature in Fahrenheit", "0") ;
let celsius = Math.floor((fahrenheit-32)*5/9);
let kelvin = celsius+273;
alert(prompt("Please enter your temperature in Fahrenheit", "0"));
}


//Output Part 5 Should play after all the stuff first
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


//Thank you message Part 7
console.log("Thanks, PAtronage, discounts warm fuzzy msg make feel good and come back for more");













//Ending of Program

/*

Notes:




Test Code: 







*/
