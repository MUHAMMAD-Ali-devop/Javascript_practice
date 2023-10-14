// Strings:

// Write a js program to find the length of a string.
// let x= "Hello orld";
// console.log(x.length);
// // Write a js program to conecatenate two strings.
// let x1="Hello";
// let y="World";
// console.log(x1.concat(" "+y));//first method
// console.log(`${x1} ${y}`);//second method
// // Write a js program to convert a string to uppercase.
// let y1="string to upercase";
// console.log(y1.toUpperCase());
// // Write a js program to convert a string to lowercase.
// let x2="STRING TO LOWERCASE";
// console.log(x2.toLowerCase());
// // Write a js program to check if a string contains a specific substring.
// let y2="create substring";
// console.log(y2.substring(0,4));
// // Write a js program to find the index of a specific character in a string.
// let x3="to find index of a specific character in string";
// console.log(x3.indexOf("s",25));
// // Write a js program to replace a specific substring in a string.
// let y3="Hello World";
// console.log(y3.replace("Hello","Hai"));
// // Write a js program to remove leading and trailing whitespace from a string.
// let x4="     Hai Hai Hello world    ";
// console.log(x4.trim());
// // Write a js program to split a string into an array of substrings.
// let y4="haha haha hai everyone";
// console.log(y4.split(""));
// // Write a js program to reverse a string.

// // const x5=["reverse string" , "ooh" , "hai" , "helo"];
// // console.log(x5.reverse());
// // Numbers:

// // Write a js program to find the sum of two numbers.
// alert("For Addition");
// let a =parseInt(prompt("Enter first number"));
// let b =parseInt(prompt("Enter second number"));
// let sum=a+b;
// alert("Answer is ="+sum);
// console.log("Sum of 2 numbers is ="+ sum);
// // Write a js program to find the difference between two numbers.
// alert("For Subtraction");
// let a1 =parseInt(prompt("Enter first number"));
// let b1 =parseInt(prompt("Enter second number"));
// let subtraction = a1-b1;
// alert("Subtracted answer is ="+subtraction);
// console.log("Subtract of 2 numbers is ="+ subtraction);
// // Write a js program to find the product of two numbers.
// alert("For Multiplication");
// let a2=parseInt(prompt("Enter first number"));
// let b2=parseInt(prompt("Enter first number"));
// let multiply=a2*b2;
// alert("Answer of multiplication of two numbers is ="+multiply);
// console.log("Answer of multiplication of two numbers is ="+multiply);
// // Write a js program to find the quotient and remainder of two numbers.
// alert("To find quotient and remainder of two numbers");
// let a3=parseInt(prompt("Enter first number"));
// let b3=parseInt(prompt("Enter first number"));
// let remainder = a3%b3;
// let quotient = a3/b3;
// alert(`${"Remainder is = "+remainder+
// "Quotient of numbers is ="+quotient}`);

// Write a js program to find the lowest value in a list of numbers.
// let z = Math.min( 0,2 ,5,6,3);
// console.log(z);

// Write a js program to round a number up to the nearest integer.
// let x = 4.3;
// let y = Math.ceil(x);
// console.log(y);
// Write a js program to round a number down to the nearest integer.
// let x = 4.9;
// let y =Math.floor(x);
// console.log(y);
// Write a js program to calculate the exponential value of a number.
// let x = 5;
// let y = Math.exp(x);
// console.log(y);
// Write a js program to calculate the natural logarithm of a number.
// let x = 100;
// let y = Math.log(x);
// console.log(y);
// Write a js program to calculate the sine of an angle in radians.
// Function to calculate sine of an angle in radians
// let degree = 90;
// let radian = degree*(Math.PI/180);
// let sinvalue = Math.sin(radian);
// console.log(sinvalue);


// Write a js program to calculate the cosine of an angle in radians.
// let degree = 90;
// let radian = degree*(Math.PI/180);
// let cosinevalue = Math.cos(radian);
// console.log(cosinevalue);
// Write a js program to calculate the square root of a number.
// let x = 100;
// let y = Math.sqrt(x);
// console.log(y);

// For loop:

// Write a program that uses a for loop to print the numbers from 1 to 10.
// for (let i =0;i<=10;i++){
//   console.log(i);
// }
// Write a program that uses a for loop to print the elements of an array.
// let x = ["Ali","Naeem","Hussain","Hussnain"];
// let y =x.length;
// for (let i=0;i<y;i++){
//   console.log(x[i]);
// }
// Write a program that uses a for loop to calculate the factorial of a number.
// let x=4;
// let fact = 1;
// for(let i=1;i<=x;i++){
//   fact =fact*i;
// }console.log(fact);
// Write a program that uses a for loop to generate a multiplication table for a given number.
// let x = 2;
// for(let i = 0;i<=10;i++){
//   console.log(`${2} x ${i} = `+x*i);
// }
// Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.
// let x = 100;
// for(let i = 1;i<=100;i++){
//   let y =i%2;
//   if(y==0){
//     console.log(i);
//   }
// }
// While Loop:

// Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.
// let x = 100;
// let i = 1;
// while (i<=x) {
//   let y =i%2;
//   if(y!=0){
//     console.log(i);
//   };
//   i++;
// }
// Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.
// let x = 10;
// let i = 1;
// while(i<=10){
//   console.log(`${x} x ${i} =` + x*i);
//   i++;
// }
// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.
// function sum(max,min){
//   let x = Math.floor(Math.random()*(max-min)+1)+min;
//   return x;
// }
// let s = 10;
// let d = 20;
// let min = s;
// let max = d;
// console.log(sum(max,min));
// Write a program that asks the user to enter a word and then prints out the word in reverse order.
// let x ="reverse is a Method";
// let y = x.split(" ").reverse().join(' ');
// console.log(y);
// Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.
// let x = "1,2,3,4,5,6,7,8,9,10";
// let y = x.split(",");
// let b  = y.length;
// let d=0;
// let i = 0;
// let z = 0;
// let sum;
// while(i<b){
//   let a = y[i];
//   let s = Number(a);
//   z = s;
//   d = d+z;
//   // console.log(sum);
//   i++;
// }
// console.log(`Sum of numbers is `+ " "+d);
// console.log(`Average of numbers is`+" "+d/b);

// Do-while Loop:

// Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.
// let epassword = 123456;
// let x = prompt("Enter the password");
// let y = x==epassword;
// if(y){
//   console.log("Excellent");
// }else{
//   do{
//     console.log("incorrect password");
//   }while(y==true)
// }
// Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.
// let x = parseInt(prompt("Enter a number"));
// let i = x;
// let y = 0;
// do{
//   console.log(i);
//   i--;
// }while(i>=y);

// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.
// function getrendom(){
//   let getrandom = Math.round(Math.random()*(100-1)+1)+1;
//   return getrandom;
// }
 
// let num;
// do{
//   num = parseInt(prompt("Enter a number"));
//   if(num==getrendom){
//     console.log("Correct guess");
//   }else{
//     console.log("Incorrect guess");
//   }
//   console.log(getrendom());
// }while(num!=getrendom());
 

// Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.
// let largestnum = 0;
// do{
//   let num = parseInt(prompt("Enter a number"));
//   if(num>largestnum){
//     largestnum = num;       wrong answer!
//   }
// }while(largestnum>=0);
// console.log("the largest number is  = "+largestnum);
// Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop".
// function word(){
//   let x = prompt("enter a number");
//   let z = word().split(",").reverse().join(",");
//   return z;
// }

// let y ="stop";
// do{
//   console.log(word());
// }while(word()!=y);


// Switch case:

// 1. Write a js program to print day of week name using switch case.
// let day = parseInt(prompt("Enter the number to get the day"));
// switch(day){
//   case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//     console.log("Thursday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     case 7:
//     console.log("Sunday");
//     break;
//   default:
// console.log("Invalid input");
// }
// 2. Write a js program print total number of days in a month using switch case.
// let month = parseInt(prompt("Enter the month number"));
// switch(month){
//   case 1:
//     console.log("First month is january having "+31+" days");
//     break;
//   case 2:
//     console.log("Second month is february having "+28+" days");
//     break;
//   case 3:
//     console.log("Third month is march having "+31+" days");
//     break;
//   case 4:
//     console.log("Fourth month is april having "+30+" days");
//     break;
//   case 5:
//     console.log("Fifth month is may having "+31+" days");
//     break;
//   case 6:
//     console.log("Six month is june having "+30+" days");
//     break;
//     case 7:
//     console.log("Seven month is july having "+31+" days");
//     break;
//     case 8:
//     console.log("Eigth month is august having "+30+" days");
//     break;
//     case 9:
//     console.log("Nineth month is september having "+30+" days");
//     break;
//     case 10:
//     console.log("Tenth month is october having "+30+" days");
//     break;
//     case 11:
//     console.log("Eleventh month is november having "+29+" days");
//     break;
//     case 12:
//     console.log("Twelvw month is december having "+31+" days");
//     break;
// }
// 3. Write a js program to check whether an alphabet is vowel or consonant using switch case.
// let x = prompt("Enter the Alphabet to check whether it is vowel or not");
// switch(x){
//   case x="a":
//     console.log("yes this alphabet is vowel");
//     break;
//   case x="e":
//     console.log("yes this alpphabet is vowel");
//     break;
//       case x="i":
//     console.log("yes this alpphabet is vowel");
//     break;
//       case x="o":
//     console.log("yes this alpphabet is vowel");
//     break;
//       case x="u":
//     console.log("yes this alpphabet is vowel");
//     break;
//   default:
//     console.log("No this alphabet is not a vowel");
// }

// 4. Write a js program to find maximum between two numbers using switch case.
// let a = parseInt(prompt("Enter the number 1"));
// let b = parseInt(prompt("Enter the number two"));
// switch(a>b||a<b){
//   case (true):
//     console.log(`${a} is greater than ${b}`);
//     break;
//   case (false):
//     console.log(`${b} is greater than ${a}`);
//     break;
//   default:
//     console.log("Invalid input");
// }
// 5. Write a js program to check whether a number is even or odd using switch case.
// let x = parseInt(prompt("Enter a number"));

// switch (x % 2) {
//   case 0:
//     console.log("Even number");
//     break;
//   case 1:
//     console.log("Odd number");
//     break;
//   default:
//     console.log("Not a valid number");
// }

// 6. Write a js program to check whether a number is positive, negative or zero using switch case.
// let x = parseInt(prompt("Enter a number"));
// switch (x>0){
//   case (true):
//     console.log("Number is positive");
//     break;
//   case (false):
//     console.log("Number is negative");
//     break;
//   default:
//     console.log("Number is zero");
// }
