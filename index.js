// 1 Basic JavaScript: Comment Your JavaScript Code
//Using // will tell JavaScript to ignore the remainder of the text on the current line:

// This is an in-line comment. You can make a multi-line comment beginning with /* and ending with */:

/* This is a
multi-line comment 
Best Practice
As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self. */

// Try creating one of each type of comment.

// single line comment

/* multi-line 
comment */



// 2 Basic JavaScript: Declare JavaScript Variables
// In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

// For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

// Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

// Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

// We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var ourName;
// creates a variable called ourName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

// Use the var keyword to create a variable called myName.

var myName;


// 3 Basic JavaScript: Storing Values with the Assignment Operator
// In JavaScript, you can store a value in a variable with the assignment operator (=).

myVariable = 5;

// This assigns the Number value 5 to myVariable.

// If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

var myVar;
myVar = 5;
// First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

// Assign the value 7 to variable a.

// Setup
var a;
a = 7;
// Only change code below this line





// 4 Basic JavaScript: Initializing Variables with the Assignment Operator

// It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0;

// Creates a new variable called myVar and assigns it an initial value of 0.

// Define a variable a with var and initialize it to a value of 9.

var a = 9;



// 5 Basic JavaScript: Understanding Uninitialized Variables
// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

// Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.


// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// 6 Basic JavaScript: Understanding Case Sensitivity in Variables
// In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

// MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

// Best Practice
// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

// Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
// Modify the existing declarations and assignments so their names use camelCase.
// Do not create any new variables.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 7 Basic JavaScript: Add Two Numbers with JavaScript
// Number is a data type in JavaScript which represents numeric data.

// Now let's try to add two numbers using JavaScript.

// JavaScript uses the + symbol as an addition operator when placed between two numbers.

// Example:

myVar = 5 + 10; // assigned 15
// Change the 0 so that sum will equal 20.
var sum = 10 + 10;

// 8 Basic JavaScript: Subtract One Number from Another with JavaScript
// We can also subtract one number from another.

// JavaScript uses the - symbol for subtraction.

// Example

// myVar = 12 - 6; // assigned 6
// Change the 0 so the difference is 12.
var difference = 45 -33;

// 9 Basic JavaScript: Multiply Two Numbers with JavaScript
// We can also multiply one number by another.

// JavaScript uses the * symbol for multiplication of two numbers.

// Example

// myVar = 13 * 13; // assigned 169
// Change the 0 so that product will equal 80.
var product = 8 * 10;

// 10 Basic JavaScript: Divide One Number by Another with JavaScript
// We can also divide one number by another.

// JavaScript uses the / symbol for division.

// Example

// myVar = 16 / 2; // assigned 8
// Change the 0 so that the quotient is equal to 2.
var quotient = 66 / 33;