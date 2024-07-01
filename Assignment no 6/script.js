// JavaScript-Assignment-10-Questions for Next Two Weaks

// Dear Students

// Web and Mobile Application Development Batch # 06 Course

// Assignment-10, Next Two Weaks

// Requirements: 

// Object Handling:

// 1. Write a JavaScript program to list the properties of a JavaScript object

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// Sample Output: name,sclass,rollno

// console.log(Object.keys(student));

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// Sample object:

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// console.log(delete(student.rollno));
// console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.   

// Sample object :

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// let lngth = Object.keys(student);
//  console.log(lngth.length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

//  console.log(library[0].readingStatus);
//  console.log(library[1].readingStatus);
//  console.log(library[2].readingStatus);


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder.

//  class Cylinder{
//     constructor(radius,height){
//         this.radius = radius,
//         this.height = height
//     }
//     volume(){
//         let volume = Math.PI*this.radius*2*this.height;
//         return `the volume of the cylinder with radius ${this.radius} and height ${this.height} is equal = ${volume.toFixed(4)}`
//     }
//  }
//  let cylinder1 = new Cylinder(4,6);
//  console.log(cylinder1.volume());

// 6. Write a Bubble Sort algorithm in JavaScript.   
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
function rearrange(...args){
    console.log(args);
    for(let i=0;i<args.length;i++){
        console.log("re");
    }
}
rearrange([10,20,30,72,52]);
// 7. Write a JavaScript program which returns a subset of a string.   
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]


//Write a function that takes an array of objects and a property value, and returns a new array containing only the objects with that property value.
// function filterPrimeNumbers(numbers) {
//     let arra1 = numbers;
//     let arra2 = arra1.filter(
//         (value)=>
//    { if (value<2)return false;
// for(let i = 2; i<=Math.sqrt(value); i++){
// if(value % i === 0)return false;
// } 
// return value;}
//     );
//     console.log(arra2)
// }
// let arra = [2,3,7,11,15,17,19,23,29];
// filterPrimeNumbers(arra);
//Write a function that takes an array and returns a new array containing only the unique elements.
// function filterUniqueElements(arr) {
//     let arra = arr;
//     let farra = arra.filter((value, index) => {
//         console.log(index);
//       for (let i = 0; i < index; i++) {
//         if (value === arra[i]) {
//           return false;
//         }
//       }
//       return true;
//     });
//     console.log(farra);
//   }
//   filterUniqueElements(["Ali", "Hussnain", "zalim", "hassan", "Ali"]);
//Write a function that takes two arrays and returns a new array containing only the elements that are present in both arrays.

// function filterCommonElements(arr, arra) {
//     let arra1 = arr;
//     let arra2 = arra;
//     let farra = arra1.filter((value)=>{
//         // console.log(arra2.length)
//         for(let i = 0 ;i < arra2.length; i++ ){
// if(value == arra2[i]){
//     return true;
// } 
//     }
//         return false;
//     })
//     console.log(farra);
// }
// filterCommonElements([1,2,4,5,6,7,6],[1,2,3,4,5,54,32,24,3,1]);


// 8. Write a JavaScript program to create a Clock.   

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"


// function sayHello() {
//     let date = new Date();
//         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//   }
  

//   var intervalId = setInterval(sayHello, 1000);


 



// 9. Write a JavaScript program to calculate the area and perimeter of a circle.   

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

 

// 10. Write a JavaScript program to sort an array of JavaScript objects.   

// Sample Object :



// var library = [ 

//    {

//        title:  'The Road Ahead',

//        author: 'Bill Gates',

//        libraryID: 1254

//    },

//    {

//        title: 'Walter Isaacson',

//        author: 'Steve Jobs',

//        libraryID: 4264

//    },

//    {

//        title: 'Mockingjay: The Final Book of The Hunger Games',

//        author: 'Suzanne Collins',

//        libraryID: 3245

//    }];

// Expected Output:



// [[object Object] {

//   author: "Walter Isaacson",

//   libraryID: 4264,

//   title: "Steve Jobs"

// }, [object Object] {

//   author: "Suzanne Collins",

//   libraryID: 3245,

//   title: "Mockingjay: The Final Book of The Hunger Games"

// }, [object Object] {

//   author: "The Road Ahead",

//   libraryID: 1254,

//   title: "Bill Gates"

// }]



//  11. Write a JavaScript function to print all the methods in an JavaScript object.
   

// Test Data :

// console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



// 12. Write a JavaScript function to parse an URL.   
// function Parseurl(pURL){
//     const parsedurl = new URL(pURL);
//     return {
//     hash : parsedurl.hash,
//     host : parsedurl.host,
//     origin: parsedurl.origin,
//     protocol:parsedurl.protocol,
//     pathname : parsedurl.hostname,
//     hostname:parsedurl.hostname,
//     username : parsedurl.username,
//     port : parsedurl.port,
//     password : parsedurl.password
// };
// }
//   let pURL = "https://chat.openai.com/c/70e706fe-0df8-4952-97d1-81737bf98d43";
//   console.log(Parseurl(pURL)) 

//  13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.   
// let Person = {
//     gender : "male",
//     sayhello(){
//         return `hello person `;
//     }
// }

// let Man = {
//     name : "Muhammad-ali",
//     hee(){
//         return `${this.name}`;
//     }
// }
// console.log(Object.getOwnPropertyNames(Man));
// console.log(Object.getPrototypeOf(Man))



//  14. Write a JavaScript function to retrieve all the values of an object's properties.   
// function properties(args){
// const val = Object.keys(args);
// return val;
// }
// var obj = {
//     name : "Muhammad-Ali"
// }
// console.log(properties(obj));
//  15. Write a JavaScript function to convert an object into a list of [key, value] pairs.   
// let hee ={
//     name : "Muhammad-Ali",
// }
// console.log(Object.entries(hee));


//  16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.   

//  17. Write a JavaScript function to check whether an object contains given property.   



// Functions

// 1. Write a js program to find cube of any number using function.

// 2. Write a js program to find diameter, circumference and area of circle using functions.

// 3. Write a js program to find maximum and minimum between two numbers using functions.

// 4. Write a js program to check whether a number is even or odd using functions.

// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// 6. Write a js program to find all prime numbers between given interval using functions.

// 7. Write a js program to print all strong numbers between given interval using functions.

// 8. Write a js program to print all Armstrong numbers between given interval using functions.

// 9. Write a js program to print all perfect numbers between given interval using functions.

// 10. Write a js program to find power of any number using function.

// 11. Write a js program to print all natural numbers between 1 to n using function.

// 12. Write a js program to print all even or odd numbers in given range using function.

// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

// 14. Write a js program to find sum of all even or odd numbers in given range using function.

// 15. Write a js program to find reverse of any number using function.

// 16. Write a js program to check whether a number is palindrome or not using function.

// 17. Write a js program to find sum of digits of a given number using function.

// 18. Write a js program to find factorial of any number using function.

// 19. Write a js program to generate nth Fibonacci term using function.

// 20. Write a js program to find GCD (HCF) of two numbers using function.

// 21. Write a js program to find LCM of two numbers using function.

// 22. Write a js program to display all array elements using function.

// 23. Write a js program to find sum of elements of array using function.

// 24. Write a js program to find maximum and minimum elements in array using function.



// Date handling: 

// 1. Write a JavaScript function to check whether an input is a date object or not.   

// Test Data :

// console.log(is_date("October 13, 2014 11:13:00"));

// console.log(is_date(new Date(86400000)));

// console.log(is_date(new Date(99,5,24,11,33,30,0)));

// console.log(is_date([1, 2, 4, 0]));

// Output :

// false

// true

// true

// false



//  2. Write a JavaScript function to get the current date.   



// Note : Pass a separator as an argument.

// Test Data :

// console.log(curday('/'));

// console.log(curday('-'));

// Output :

// "11/13/2014"

// "11-13-2014"



// 3. Write a JavaScript function to get the number of days in a month.   



// Test Data :

// console.log(getDaysInMonth(1, 2012));

// console.log(getDaysInMonth(2, 2012));

// console.log(getDaysInMonth(9, 2012));

// console.log(getDaysInMonth(12, 2012));

// Output :

// 31

// 29

// 30

// 31



// 4. Write a JavaScript function to get the month name from a particular date.   



// Test Data :

// console.log(month_name(new Date("10/11/2009")));

// console.log(month_name(new Date("11/13/2014")));

// Output :

// "October"

// "November"



//  5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   



// Test Data :

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// Output :

// "Date1 = Date2"

// "Date1 > Date2"

// "Date2 > Date1"



 

// 6. Write a JavaScript function to add specified minutes to a Date object.   



// Test Data :

// console.log(add_minutes(new Date(2014,10,2), 30).toString());

// Output :

// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"



//  7. Write a JavaScript function to test whether a date is a weekend.   



// Note : Use standard Saturday/Sunday definition of a weekend.

// Test Data :

// console.log(is_weekend('Nov 15, 2014'));

// console.log(is_weekend('Nov 16, 2014'));

// console.log(is_weekend('Nov 17, 2014'));

// Output :

// "weekend"

// "weekend"

// undefined



//  8. Write a JavaScript function to get difference between two dates in days.   



// Test Data :

// console.log(date_diff_indays('04/02/2014', '11/04/2014'));

// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// Output :

// 216

// -28

// 9. Write a JavaScript function to get the last day of a month.   



// Test Data :

// console.log(lastday(2014,0));

// console.log(lastday(2014,1));

// console.log(lastday(2014,11));

// Output :

// 31

// 28

// 31

// 10. Write a JavaScript function to calculate 'yesterday day'.   



// Test Data :

// console.log(yesterday('Nov 15, 2014'));

// console.log(yesterday('Nov 16, 2015'));

// console.log(yesterday('Nov 17, 2016'));

// Output :

// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"

// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"

// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"



// 11. Write a JavaScript function to get the maximum date from an array of dates.   



// Test Data :

// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Output :

// "2015/02/02"



// 12. Write a JavaScript function to get the minimum date from an array of dates.   



// Test Data :

// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Output :

// "2015/01/03"

// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.   



// Test Data :

// console.log(timeConvert(200));

// Output :

// "200 minutes = 3 hour(s) and 20 minute(s)."



// 14. Write a JavaScript function to get the amount of days of a year.   



// Test Data :

// console.log(days_of_a_year(2015));

// 365

// console.log(days_of_a_year(2016));

// 366



// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.   



// Test Data :

// console.log(quarter_of_the_year(new Date(2015, 1, 21)));

// 2

// console.log(quarter_of_the_year(new Date(2015, 10, 18)));

// 4



// 16. Write a JavaScript function to count the number of days passed since beginning of the year.   



// Test Data :

// console.log(days_passed(new Date(2015, 0, 15)));

// 15

// console.log(days_passed(new Date(2015, 11, 14)));

// 348



// 17. Write a JavaScript function to convert a Unix timestamp to time.   



// Test Data :

// console.log(days_passed(new Date(2015, 0, 15)));

// 15

// console.log(days_passed(new Date(2015, 11, 14)));

// 348



// 18. Write a JavaScript program to calculate age.   



// Test Data :

// console.log(calculate_age(new Date(1982, 11, 4)));

// 32

// console.log(calculate_age(new Date(1962, 1, 1)));

// 53



// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   

// Test Data :

// d= new Date(2015, 10, 1);

// console.log(day_of_the_month(d));

// "01"



// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(short_Days(dt));

// "Sun"



// 21. Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(long_Days(dt));

// "Sunday"



// 22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(ISO_numeric_date(dt));

// 7



// 23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(english_ordinal_suffix(dt));

// "1st"



// 24. Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.   

// Example : 42 (the 42nd week in the year)

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(ISO8601_week_no(dt));

// 44



// 25. Write a JavaScript function to get a full textual representation of a month, such as January or June.   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(full_month(dt));

// "November"



// 26. Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(numeric_month(dt));

// "11"



// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(short_months(dt));

// "Nov"



// 28. Write a JavaScript function to get a full numeric representation of a year (4 digits).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(full_year(dt));

// 2015



//  29. Write a JavaScript function to get a two digit representation of a year.   

// Examples : 79 or 04

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(sort_year(dt));

// "89"



// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.   

 

// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.   



//  32. Write a JavaScript function to swatch Internet time (000 through 999).   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(internet_time(dt));

// 812



// 33. Write a JavaScript function to get 12-hour format of an hour with leading zeros.   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_with_zeroes(dt));

// "12"



//  34. Write a JavaScript function to get 24-hour format of an hour without leading zeros.   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_without_zeroes(dt));

// 0



//  35. Write a JavaScript function to get minutes with leading zeros (00 to 59).   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(minutes_with_leading_zeros(dt));

// "00"



// 36. Write a JavaScript function to get seconds with leading zeros (00 through 59).   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(seconds_with_leading_zeros(dt));

// "00"



// 37. Write a JavaScript function to get Timezone.   

// Test Data :

// dt = new Date();

// console.log(seconds_with_leading_zeros(dt));

// "India Standard Time"

 

// 38. Write a JavaScript function to find whether or not the date is in daylights savings time.   

// Test Data :

// dt = new Date();

// console.log(daylights_savings(dt));

// 1



// 39. Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   

// Test Data :

// dt = new Date();

// console.log(diff_to_GMT(dt));

// "+05.500"



// 40. Write a JavaScript function to get timezone offset in seconds.   

// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.

// Test Data :

// dt = new Date();

// console.log(timezone_offset_in_seconds(dt));

// 19800



// 41. Write a JavaScript function to add specified years to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// console.log(add_years(dt, 10).toString());

// Output :

// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"



// 42. Write a JavaScript function to add specified weeks to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// console.log(add_weeks(dt, 10).toString());

// Output :

// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"



// 43. Write a JavaScript function to add specified months to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// console.log(add_months(dt, 10).toString());

// Output :

// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"



// 44. Write a JavaScript function to get time differences in minutes between two dates.   

// Test Data :

// dt1 = new Date("October 13, 2014 11:11:00");

// dt2 = new Date("October 13, 2014 11:13:00");

// console.log(diff_minutes(dt1, dt2));

// 2



// 45. Write a JavaScript function to get time differences in hours between two dates.   

// Test Data :

// dt1 = new Date("October 13, 2014 08:11:00");

// dt2 = new Date("October 13, 2014 11:13:00");

// console.log(diff_hours(dt1, dt2));

// 3

// 46. Write a JavaScript function to get time differences in days between two dates.   



// Test Data :

// dt1 = new Date("October 13, 2014 08:11:00");

// dt2 = new Date("October 19, 2014 11:13:00");

// console.log(diff_days(dt1, dt2));

// 6



// 47. Write a JavaScript function to get time differences in weeks between two dates.   

// Test Data :

// dt1 = new Date("June 13, 2014 08:11:00");

// dt2 = new Date("October 19, 2014 11:13:00");

// console.log(diff_weeks(dt1, dt2));

// 18



// 48. Write a JavaScript function to get time differences in months between two dates.   

// Test Data :

// dt1 = new Date("June 13, 2014 08:11:00");

// dt2 = new Date("October 19, 2014 11:13:00");

// console.log(diff_months(dt1, dt2));

// 5



// 49. Write a JavaScript function to get time differences in years between two dates.   

// Test Data :

// dt1 = new Date("June 13, 2014 08:11:00");

// dt2 = new Date("October 19, 2017 11:13:00");

// console.log(diff_years(dt1, dt2));

// 3



// 50. Write a JavaScript function to get the week start date.   

//  51. Write a JavaScript function to get the week end date.   

//  52. Write a JavaScript function to get the month start date.   

//  53. Write a JavaScript function to get the month end date.   

 





// Submit:

// 1- submit your code here https://forms.gle/ZYL1VLf2jBt7N2Su9
// 2- Your output console screenshots must included in your github repository.
// 3- Due Date 05-April-2023


// After solving these problems, you guys will be able to make well and efficient logics.
// Remember! Hard Work is key to success.
// Struggle hard, believe on allah, everything will be fine.