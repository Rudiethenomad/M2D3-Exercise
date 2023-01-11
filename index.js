/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

/*
const int_1 = 10
const int_2 = 20

if(int_1 > int_2)
{
    console.log (int_1);
}
else if (int_1 < int_2)
{
    console.log (int_2);
}
else 
    console.log ("Intergers are equil");

*/



/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

/*
const int = 10
if (int !== 5)
{ 
    console.log ("not equal");
}
else conslole.log ("equal")

*/

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

/*
const int = 10;
if (int % 5 === 0)
{
    console.log ("divisible by 5");
}
else console.log ("not divisible by 5");
*/

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/*
let n = 3;
let m = 11;

if (n === 8 || m === 8) {
    console.log ("one is equal to 8");
} else if (n + m === 8)
{
    console.log ("addition is equal to 8");
} else if (n - m === 8 || m - n === 8)
{
    console.log ("the subtraction is equal to 8");
}
else console.log ("none equal 8");
*/




/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/*
let totalShoppingCart = 100;
if (totalShoppingCart > 50)
{ console.log (totalShoppingCart)}
else{ console.log (totalShoppingCart + 10)};

*/



/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/*
let totalShoppingCart = 100;
if (totalShoppingCart > 50)
{ console.log (totalShoppingCart * .80)}
else{ console.log (totalShoppingCart * .8 + 10)};
*/



/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

// Come back to number 6 it is a bit complex
/*let egg1 = 12;
let egg2 = 24;
let egg3 = 36;

if (egg1 > egg2 && egg1 > egg3)
{ if (egg2 > egg3) {
    console.log(egg1 + "," + egg2 + "," + egg3);}
    else{ console.log (egg1 + "," + egg3 + "," + egg2);}
}

*/



/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/
/*
const egg = "fried";
//const egg = 10;

if(typeof egg === "number")
{
    console.log ("Interger");
}
else
{
    console.log("Not an Interger");
}
*/

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/
/*
//const egg = 11;
const egg = 6;
if (egg % 2 === 0)
{
    console.log ("even");
}
else {
    console.log ("odd");
}
/* 


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
/*
let val = 7
//let val = 2
//let val = 12
if (val < 5) 
  {
    console.log("Less than 5");
  } 
  else if (val < 10) 
  {
    console.log("less than 10");
  } 
  else 
  {
    console.log("greater than or equal to 10");
  } 
  */
 

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/*
//let num = 36;
//let num = 1;
let num = 19;
if (num < 5) 
{ 
    console.log  ("display Tiny");
}
else if (num < 10)
 { 
    console.log ("display Small");
 }
else if (num < 15) 
{ console.log ("display Medium");
}
else if (num < 20)
{ console.log ("display Large");
}
else if(num >= 20)
{ console.log ("display Huge");
}
*/

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/*
//let isMale = true;
let isMale = false;
console.log (isMale ? "male" : "female");
*/

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/
/*
let myArray =[]
let n = 0;
while (n < 6)
{
    myArray.push (n);
    n++
}
console.log (myArray)
*/

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/*
for (let i = 0; i < 11; i++) {
    console.log(i);
  }

*/


/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

/*
for (let i = 0; i < 11; i++) 
{
    if(i !==3 && i !==5)
    {
    console.log(i);
    }
}

*/


/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */