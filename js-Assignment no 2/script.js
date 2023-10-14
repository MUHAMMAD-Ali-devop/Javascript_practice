
// 1.	Declare two variables: admin and name. Assign the value "Umair Azmat" to name.
//  Copy the value from name to admin. Show the value of admin using alert (must output Name).
var admin;
var name = "Umair Azmat";
admin = name;
alert(admin);

// 2.	Create a variable with the name of our planet. How would you name such a variable?
var planet = "Earth";
// 3.	Create a variable to store the name of a current visitor to a website.
//  How would you name that variable?
var visitorName;
// 4.	Create a string variable called favDrink and assign a value to it.
var favDrink = "coke";
// 5.	Create a number variable called favNum and assign a value to it
var favNum = "7";
// 6.	Create a function block called myFavs that console logs your answers,
//  don't forget to invoke the myFavs function.
function myFavs() {
    console.log("My favorite drink is " + favDrink + " and my favorite number is " + favNum + ".");
  }
  myFavs();
// 7.	Create an object called person, with name set to Umair and age set to 20.
var person = {
    name: "Umair",
    age: 20
  };
// 8.	write a JS program, define two variables and sum those two variable and save result 
// in third variable and print in console?
var x = 11
var y = 2
var z = x+y;
console.log("Adittion of two variable is = "+z);

// 9.	write a JS program, that can divide two numbers and show the result in console?
//  console.log("result of firstProgram", a);
var A = 40
var B = 20
var c = B/A;
console.log("result of firstProgram = "+c)

// 10.	write a JS program, that can add two number, divide result by 5 and show in console?
// console.log("result of firstProgram", a);
var first = 5 , second = 20;
var addition = first + second;
var division = addition/5;
console.log("result of firstProgram = "+division);

// 11.	write a JS program, that can convert temp from F into C and show into console,
//  using C = (F − 32) * 5/9. use if F = 50, what will be the value of C?// console.log("Divide two number", a); 

// Temperature in fahrenheite.
 var F = 50   
var celsius = (F-32)*5/9 ; 
console.log("Temperature in celsius = "+celsius);
// 12.	Write a JavaScript program to find the sum of two numbers obtained from prompt and display
//  the result using alert.
alert("To find the sum of two numbers");
var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var Adittion01 = firstNumber + secondNumber;
alert("By Adittion = "+Adittion01); 
// 13.	Write a JavaScript program to find the difference of two numbers obtained from prompt
//  and display the result using console.log.
alert("To find the difference of two numbers");
var firstNumber01 = parseInt(prompt("Enter first number"));
var secondNumber01 = parseInt(prompt("Enter second number"));
var Subtraction = firstNumber01 - secondNumber01;
alert("By Subtraction = "+Subtraction);
// 14.	Write a JavaScript program to find the product of two numbers obtained from prompt
//  and display the result using alert.
alert("To find the product of two numbers");
var firstNumber02 = parseInt(prompt("Enter first number"));
var secondNumber02 = parseInt(prompt("Enter second number"));
var Product = firstNumber02*secondNumber02;
alert("Product of two numbers is = "+Product);
// 15.	Write a JavaScript program to find the quotient of two numbers obtained from prompt
//  and display the result using console.log.
alert("To find the quotient of two numbers")
var num1 =parseInt (prompt("Enter first number: "));
var num2 =parseInt (prompt("Enter second number: "));
var quotient = num1 / num2;
console.log("The quotient of " +num1+ " and " +num2+ " is " +quotient);
// 16.	Write a JavaScript program to find the remainder of two numbers obtained from prompt
//  using the modulus operator and display the result using alert.
alert("To find the remainder of two numbers")
var  num1 = parseInt (prompt("Enter first number "));
var num2 = parseInt (prompt("Enter second number "));
var modulus = num1%num2;
alert("modulus of num1 and num2 is = "+modulus)