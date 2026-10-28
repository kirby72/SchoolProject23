/*

Title:

Program Element List (10 Most Complex Concepts / Syntax used):

Teammates Kyle (Github Repo Owner, Leader ig) (Author, Role)

Version:1

Date (Last Updated)
*/

//beginning of Program

// variable declaration
let t = 5; //let can be changed
const earth = 'round'; // const is permanent

let _c = false;  
let _f = false; 
let _k = false;


let isComplete = false; 

const dofunction1 = () => {
  _c = true
  console.log("celcius");
};

const dofunction2 = () => {
  _f = true
  console.log("fahrenheit");
};

const dofunction3 = () => {
  _k = true
  console.log("kelvin");
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
document.getElementById("BtnC").onclick = dofunction1;
document.getElementById("BtnF").onclick = dofunction2;
document.getElementById("BtnK").onclick = dofunction3;
//Reiterate User Input Part 4.5 UI/UX

alert("Hello I'm an alert box!!");

let person = prompt("Please enter your name", "Really Cool Person");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}


//Save Load Options (Main)

if (_c)
{
let fahrenheit = Math.floor(celsius*9/5);
let celsius = prompt("Please enter your temperature in Celsius", "0");
let kelvin = celsius+273;
}
else if (_k)
{
let fahrenheit = Math.floor(celsius*9/5);
let celsius = kelvin-273;
let kelvin = prompt("Please enter your temperature in Kelvin", "0" );
}
else if (_f)
{
let fahrenheit = prompt("Please enter your temperature in Fahrenheit", "0") ;
let celsius = Math.floor((fahrenheit-32)*5/9);
let kelvin = celsius+273;
}


//Output Part 5
console.log("Game over,		your score		congratulations	");


//Thank you message Part 7
console.log("Thanks, PAtronage, discounts warm fuzzy msg make feel good and come back for more");













//Ending of Program

/*

Notes:




Test Code: 







*/
