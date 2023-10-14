// 1- Declare a variable called myVar and assign it the value of 5. Then, using the console.log function,
//  print the value of myVar to the console.
var myVar = 5;
console.log("Value of myVar is = "+myVar);
// 2- Declare a variable called myString and assign it the value of "Hello, world!".
//  Then, using the alert function, display the value of myString in an alert box.
var myString = "Hello, world!"
alert(myString)
// 3- Declare two variables called num1 and num2, and assign them the values of 5 and 10, respectively.
//  Using the prompt function, ask the user to enter a number,
//   and store the result in a variable called userNum. Then, using the console.log
//    function, print the sum of num1, num2, and userNum to the console.
var num1 = 5, num2 = 10;
var sum = num1+num2;
console.log("The sum of num1 and num2 is= "+sum);
var userNum =parseInt(prompt("Enter a number"));
console.log("userNum is ="+userNum);
// 4- Declare a variable called myBoolean and assign it the value of true. Using an if statement,
//  check if myBoolean is true, and if so, use the console.log function to print "It's true!" to the console.
//   Otherwise, print "It's false!" to the console.
var myBoolean = true;
if(myBoolean){
    console.log("It's true!");
}else{
    console.log("It's false!");
}
// 5- Use an if/else statement to check if a number is even or odd. If the number is even,
//  log "even" to the console. If the number is odd, log "odd" to the console.
var Num =parseInt(prompt("Enter a number"));
if((Num%2)==0){
    console.log("Entered num is \"even\"");
}else{
    console.log("Entered num is \"odd\"");
}
// 6- Use the + operator to concatenate two strings together. Then, log the result to the console.
var string1 = "MUHAMMAD-"
var string2 = "Ali";
var result = string1+string2;
console.log(result);

// 7- Use the * operator to multiply two numbers together. Then, log the result to the console.
var NUM1 = 10;
var NUM2 = 5;
var product = NUM1*NUM2;
console.log(product);
// Write a program that takes a string from the user using prompt and checks if it's equal to "password".
//  If it is, display an alert saying "Access granted", otherwise display an alert saying "Access denied".

var userInput = prompt("Please enter the password");

if (userInput === "Password") {
  alert("Access granted");
} else {
  alert("Access denied");
}
// 9- Write a program that takes three numbers as input and returns the largest of those three numbers.
var no1=parseInt(prompt("Enter first number"));
var no2=parseInt(prompt("Enter second number"));
var no3=parseInt(prompt("Enter third number"));
var max;
if(no1>no2){
    max=no1;
}else if(no2>no3){
    max=no2;
} else {
    max=no3;
}
alert("Maximum number is= "+max);

// 10 -Write a program that takes two strings from the user using prompt and checks if they are equal.
//  If they are, display an alert saying "The strings are equal", otherwise display an alert saying
//   "The strings are not equal".
var prompt1 = prompt("Enter string 1");
var prompt2 = prompt("Enter string 2");

if (prompt1 === prompt2) {
  alert("The strings are equal");
} else {
  alert("The strings are not equal");
}