/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let int1 = 8;
let int2 = 9;

if (int1 > int2) {
  console.log(int1);
} else if (int2 > int1) {
  console.log(int2);
} else console.log("They are equal");

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

let int3 = 8;

if (int3 !== 5) {
  console.log("Not equal");
} else console.log("Equal");

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

let int4 = 4;

if (int4 % 5 === 0) {
  console.log("Divisible by 5");
} else console.log("Not divisible by 5");

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int5 = 5;
let int6 = 8;

if (int5 === 8 || int6 === 8) {
  console.log("At least one of them is 8");
} else if (int5 + int6 === 8) {
  console.log("Their addition is 8");
} else if (int5 - int6 === 8 || int6 - int5 === 8) {
  console.log("Their subtraction is 8");
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let cartTotal = 35;

if (cartTotal > 50) {
  console.log(cartTotal);
} else console.log(cartTotal + 10);

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let cartTotal2 = 60;

if (cartTotal2 > 50) {
  console.log(cartTotal2 * 0.8);
} else console.log(cartTotal2 * 0.8 + 10);

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

var x = 10;
var y = -35;
var z = 20;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

let value = 3;

if (typeof value === "number") {
  console.log("Integer");
} else {
  console.log("Not integer");
}

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

let number = 3;
if (number % 2 === 0) {
  console.log("Even");
} else console.log("Odd");

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

let val = 7;

if (val < 5) {
  console.log("Less than 5");
} else if (val < 10) {
  console.log("Less than 10");
} else {
  console.log("Greater than or equal to 10");
}

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

let num = 3;

if (num < 5) {
  console.log("display Tiny");
} else if (num < 10) {
  console.log("display Small");
} else if (num < 15) {
  console.log("display Medium");
} else if (num < 20) {
  console.log("display Large");
} else if (num >= 20) {
  console.log("display Huge");
}
/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
console.log(isMale ? "male" : "female");

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/
for (let i = 0; i < 10; i++) {
  if (i !== 3 && i !== 5) {
    console.log(i);
  }
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "Even");
  } else console.log(i, "Odd");
}

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

let day = 1;

switch (day) {
  case 1:
    day = console.log("Monday");
    break;
  case 2:
    day = console.log("Tuesday");
    break;
  case 3:
    day = console.log("Wednesday");
    break;
  case 4:
    day = console.log("Thursday");
    break;
  case 5:
    day = console.log("Friday");
    break;
  case 6:
    day = console.log("Saturday");
    break;
  case 7:
    day = console.log("Sunday");
    break;
  default:
    console.log("Enter a number from 1-7");
    break;
}