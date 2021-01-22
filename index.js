// 1 Basic JavaScript: Comment Your JavaScript Code
//Using // will tell JavaScript to ignore the remainder of the text on the current line:
// This is an in-line comment. You can make a multi-line comment beginning with /* and ending with */:

/* 
This is a
multi-line comment 
Best Practice
As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self. */

// Try creating one of each type of comment.

// Single line
/* 
Multi-Line
*/



// 2 Basic JavaScript: Declare JavaScript Variables
// In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

// For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

// Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

// Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

// We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

// var ourName;
// creates a variable called ourName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

// Use the var keyword to create a variable called myName.

var myName;



// 3 Basic JavaScript: Storing Values with the Assignment Operator
// In JavaScript, you can store a value in a variable with the assignment operator (=).

// myVariable = 5;

// This assigns the Number value 5 to myVariable.

// If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

// var myVar;
// myVar = 5;
// First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

// Assign the value 7 to variable a.

// Setup
var a;

// Only change code below this line
a = 7;




// 4 Basic JavaScript: Initializing Variables with the Assignment Operator

// It is common to initialize a variable to an initial value in the same line as it is declared.

// var myVar = 0;

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

// var someVariable;
// var anotherVariableName;
// var thisVariableNameIsSoLong;
// Modify the existing declarations and assignments so their names use camelCase.
// Do not create any new variables.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9001;

// 7 Basic JavaScript: Add Two Numbers with JavaScript
// Number is a data type in JavaScript which represents numeric data.

// Now let's try to add two numbers using JavaScript.

// JavaScript uses the + symbol as an addition operator when placed between two numbers.

// Example:

// myVar = 5 + 10; // assigned 15
// Change the 0 so that sum will equal 20.
var sum = 10 + 10;

// 8 Basic JavaScript: Subtract One Number from Another with JavaScript
// We can also subtract one number from another.

// JavaScript uses the - symbol for subtraction.

// Example

// myVar = 12 - 6; // assigned 6
// Change the 0 so the difference is 12.
var difference = 45 - 33;

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

//11 Basic JavaScript: Increment a Number with JavaScript
// You can easily increment or add one to a variable with the ++ operator.

// i++;

// is the equivalent of

// i = i + 1;

// Note
// The entire line becomes i++;, eliminating the need for the equal sign.

// Change the code to use the ++ operator on myVar.

var myVar = 87;

// Only change code below this line
myVar++;

// 12 Basic JavaScript: Decrement a Number with JavaScript
// You can easily decrement or decrease a variable by one with the -- operator.

// i--;

// is the equivalent of

// i = i - 1;

// Note
// The entire line becomes i--;, eliminating the need for the equal sign.

// Change the code to use the -- operator on myVar.
var myVar = 11;

// Only change code below this line
myVar--;

// 13 Basic JavaScript: Create Decimal Numbers with JavaScript
// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 3.8;
//14 Basic JavaScript: Multiply Two Decimals with JavaScript
// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

// Let's multiply two decimals together to get their product.

// Change the 0.0 so that product will equal 5.0.
var product = 2.0 * 2.5;

// 15 Basic JavaScript: Divide One Decimal by Another with JavaScript
// Now let's divide one decimal by another.

// Change the 0.0 so that quotient will equal to 2.2.
var quotient = 4.4 / 2.0; // Change this line

// 16 Basic JavaScript: Finding a Remainder in JavaScript
// The remainder operator % gives the remainder of the division of two numbers.

// Example

// 5 % 2 = 1 because
// Math.floor(5 / 2) = 2 (Quotient)
// 2 * 2 = 4
// 5 - 4 = 1 (Remainder)
// Usage
// In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

// 17 % 2 = 1 (17 is Odd)
// 48 % 2 = 0 (48 is Even)
// Note
// The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

// Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
// Only change code below this line

var remainder = 11 % 3;
console.log(remainder);
// 17 Basic JavaScript: Compound Assignment With Augmented Addition
// In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

// myVar = myVar + 5;

// to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

// One such operator is the += operator.

// var myVar = 1;
// myVar += 5;
// console.log(myVar); // Returns 6
// Convert the assignments for a, b, and c to use the += operator.




var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// 18 Basic JavaScript: Compound Assignment With Augmented Subtraction
// Like the += operator, -= subtracts a number from a variable.

// myVar = myVar - 5;

// will subtract 5 from myVar. This can be rewritten as:

// myVar -= 5;

// Convert the assignments for a, b, and c to use the -= operator.

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c =- 1;

// 19 Basic JavaScript: Compound Assignment With Augmented Multiplication
// The *= operator multiplies a variable by a number.

// myVar = myVar * 5;

// will multiply myVar by 5. This can be rewritten as:

// myVar *= 5;

// Convert the assignments for a, b, and c to use the *= operator.

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *=10 ;

// 20 Basic JavaScript: Compound Assignment With Augmented Division
// The /= operator divides a variable by another number.

// myVar = myVar / 5;

// Will divide myVar by 5. This can be rewritten as:

// myVar /= 5;

// Convert the assignments for a, b, and c to use the /= operator.
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// 21 Basic JavaScript: Declare String Variables
// Previously we have used the code

// var myName = "your name";

// "your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

// Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
var myFirstName = 'Austin';
var myLastName = "Morales";


// 22 Basic JavaScript: Escaping Literal Quotes in Strings
// When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

// var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

// Alan said, "Peter is learning JavaScript".
// var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

// I am a "double quoted" string inside "double quotes".
var newStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 23 Basic JavaScript: Concatenating Strings with Plus Operator
// In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

// Example

// 'My name is Alan,' + ' I concatenate.'
// Note
// Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

// Example:

// var ourStr = "I come first. " + "I come second.";
// // ourStr is "I come first. I come second."
// Build myStr from the strings "This is the start. " and "This is the end." using the + operator.

var endStr = "This is the start. " + "This is the end."; // Change this line

// 24 Basic JavaScript: Concatenating Strings with the Plus Equals Operator
// We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

// Note
// Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

// Example:

// var ourStr = "I come first. ";
// ourStr += "I come second.";
// // ourStr is now "I come first. I come second."
// Build myStr over several lines by concatenating these two strings: "This is the first sentence. " and "This is the second sentence." using the += operator. Use the += operator similar to how it is shown in the editor. Start by assigning the first string to myStr, then add on the second string.

var addStr = 'This is the first sentence. ';
addStr += "This is the second sentence.";

// 25 Basic JavaScript: Constructing Strings with Variables
// Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

// Example:

// var ourName = "Zorkbork";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";
// // ourStr is now "Hello, our name is Zorkbork, how are you?"
// Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"
var myName = "Austin";
var madStr = "My name is " + myName + " and I am well!";


// 26 Basic JavaScript: Appending Variables to Strings
// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

// Example:

// var anAdjective = "awesome!";
// var ourStr = "Austin is ";
// ourStr += anAdjective;
// ourStr is now "Austin is awesome!"
// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

// Change code below this line

var someAdjective = "challenging";
var codeStr = "Learning to code is ";
codeStr += someAdjective;

// 27 Basic JavaScript: Find the Length of a String
// You can find the length of a String value by writing .length after the string variable or string literal.

// "Alan Peter".length; // 10

// For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

// Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// 28 Basic JavaScript: Use Bracket Notation to Find the First Character in a String

// Bracket notation is a way to get a character at a specific index within a string.

// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

// For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

// Example:

// var firstName = "Charles";
// var firstLetter = firstName[0]; // firstLetter is "C"
// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

// Hint: Try looking at the example above if you get stuck.
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 29 Basic JavaScript: Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// For example, the following code:

// var myStr = "Bob";
// myStr[0] = "J";
// cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

// var myStr = "Bob";
// myStr = "Job";
// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.


// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World" // Change this line
// Only change code above this line

//30 Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String

// You can also use bracket notation to get the character at other positions within a string.

// Remember that computers start counting at 0, so the first character is actually the zeroth character.

// Example:

// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 31 Basic JavaScript: Use Bracket Notation to Find the Last Character in a String
// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

// Example:

// var firstName = "Charles";
// var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
// Use bracket notation to find the last character in the lastName variable.

// Hint: Try looking at the example above if you get stuck.
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 32 Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String
// You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

// For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

// Example:

// var firstName = "Charles";
// var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
// Use bracket notation to find the second-to-last character in the lastName string.

// Hint: Try looking at the example above if you get stuck.
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 33 Basic JavaScript: Word Blanks
// var wordBlanks = "the" + ' '+ myNoun +" "+ myAdjective+ " " + myVerb +" "+ myAdverb; // Change this line

// In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

// Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

// var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.



var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " fluffy " + myNoun + " got scared and " + myVerb + ' very ' + myAdverb ; // Change this line
// Only change code above this line

// 34 Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays
// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

// var sandwich = ["peanut butter", "jelly", "bread"].

// Modify the new array myArray so that it contains both a string and a number (in that order).
// Only change code below this line
var myArray = ["Friday", 2];

// 35 Basic JavaScript: Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

[ 
  ["Bulls", 23], ["White Sox", 45] 
]
// This is also called a multi-dimensional array.

// Create a nested array called myArray.

// Only change code below this line
var zeroArray = [["March", 9], ["April", 1]];
zeroArray[0][1]
// 36 Basic JavaScript: Access Array Data with Indexes
// We can access the data inside arrays using indexes.

// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


// Example

// var array = [50,60,70];
// array[0]; // equals 50
// var data = array[1]; 
// equals 60

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0];
// 37 Basic JavaScript: Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely.

// Example

// var ourArray = [50,40,30];
// ourArray[0] = 15; // equals [15,40,30]

// Modify the data stored at index 0 of myArray to a value of 45.
// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0]= 45;
// 38 Basic JavaScript: Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

// Example

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
// arr[3]; // equals [[10,11,12], 13, 14]
// arr[3][0]; // equals [10,11,12]
// arr[3][0][1]; // equals 11
// Using bracket notation select an element from myArray such that myData is equal to 8.
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
          
// Only change code below this line
var myData = myArray[2][1];

// 39 Basic JavaScript: Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.
// Examples:

// var arr1 = [1,2,3];
// arr1.push(4);
// arr1 is now [1,2,3,4]

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Push ["dog", 3] onto the end of the myArray variable.
// Setup
var dogArray = [["John", 23], ["cat", 2]];

// Only change code below this line
dogArray.push(["dog", 3])
// 40 Basic JavaScript: Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.

// .pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
// Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.
// Setup
var myArray = [
  ["John", 23],
   ["cat", 2]
];

// Only change code below this line
var removedFromMyArray = myArray.pop();

// 41 Basic JavaScript: Manipulate Arrays With shift()
// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

// Example:

// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

// Setup
var awArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArr = awArray.shift();
 
// 42 Basic JavaScript: Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy");
// // ourArray now equals ["Happy", "J", "cat"]

// Add ["Paul",35] to the beginning of the myArray variable using unshift().
// Setup
var lolArray = [["John", 23], ["dog", 3]];
lolArray.shift();

// Only change code below this line
lolArray.unshift(["Paul",35]);


// 43 Basic JavaScript: Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]

// There should be at least 5 sub-arrays in the list.

var myList = [
  ["Austin", 9, false],
  ["Drake", 15],
  ["Ron", 7, true],
  ["Kiah", 4],
  ["Cassie", "Gone"]


];

// 44 Basic JavaScript: Write Reusable JavaScript with Functions
// In JavaScript, we can divide up our code into reusable parts called functions.

// Here's an example of a function:

function functionName() {

  //code block
  console.log("Function was called!");
}
functionName(); 
// You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

// Create a function called reusableFunction which prints "Hi World" to the dev console.
// Call the function.
function reusableFunction(){
  console.log("Hi World")
}
reusableFunction();

// 45 Basic JavaScript: Passing Values to Functions with Arguments

// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
// Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }
// testFun(10, "Hello");
// testFun(300, "Goodbye");
// Then we can call testFun: testFun("Hello", "World"); We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
function functionWithArgs(x,y){
  console.log(x+y);
}
functionWithArgs(6,6);
functionWithArgs(60,6);

// 46 Basic JavaScript: Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

// Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
  }
  
  // Only change code above this line
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }


//   47 Basic JavaScript: Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

// Here is a function myTest with a local variable called loc.

// function myTest() {
//   var loc = "foo";
//   console.log(loc);
// }
// myTest(); // logs "foo"
// console.log(loc); // loc is not defined
// loc is not defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.
function myLocalScope() {

    // Only change code below this line
  var myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);


// 48 Basic JavaScript: Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
// The function myFun will return "Head" because the local version of the variable is present.

// Add a local variable to myOutfit function to override the value of outerWear with "sweater".
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = "sweater"


  // Only change code above this line
  return outerWear;
}

myOutfit();

// 49 Basic JavaScript: Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

// Example

// function plusThree(num) {
//   return num + 3;
// }
// var answer = plusThree(5); // 8
// plusThree takes an argument for num and returns a value equal to num + 3.

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.
function timesFive(boss){
  return boss * 5;

}
timesFive(1);
timesFive(10);

// 50 Basic JavaScript: Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

// Example

// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// addSum(3); // sum will be modified but returned value is undefined
// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive();


// 51 Basic JavaScript: Assignment with a Returned Value
// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Assume we have pre-defined a function sum which adds two numbers together, then:

// ourSum = sum(5, 12);

// will call sum function, which returns a value of 17 and assigns it to ourSum variable.

// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line


// 52 Basic JavaScript: Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    // Only change code below this line
    
    return item;
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

// 53 Basic JavaScript: Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

// Note
// Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {

    // Only change code below this line
  
    return false; // Change this line
  
    // Only change code above this line
  }

//   54 Basic JavaScript: Use Conditional Logic with If Statements
// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Pseudocode

// if (condition is true) {
//   statement is executed
// }
// Example

// function test (myCondition) {
//   if (myCondition) {
//      return "It was true";
//   }
//   return "It was false";
// }
// test(true);  // returns "It was true"
// test(false); // returns "It was false"
// When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

// Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  
  
  
    // Only change code above this line
  
  }


//   55 Basic JavaScript: Comparison with the Equality Operator
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

// function equalityTest(myVal) {
//   if (myVal == 10) {
//      return "Equal";
//   }
//   return "Not Equal";
// }
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

// 1   ==  1   // true
// 1   ==  2   // false
// 1   == '1'  // true
// "3" ==  3   // true
// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.

// Setup
function testEqual(val) {
    if (val) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);



// 56 Basic JavaScript: Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// Examples

// 3 ===  3   // true
// 3 === '3'  // false
// In the second example, 3 is a Number type and '3' is a String type.

// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7
// Setup
function testStrict(val) {
    if (val) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);


//   57 Basic JavaScript: Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

// Examples

// 3 == '3'  // returns true because JavaScript performs type conversion from string to number
// 3 === '3' // returns false because the types are different and type conversion is not performed
// Note
// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:


// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
    if (a == b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");


//   58 Basic JavaScript: Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2     // true
// 1 != "1"    // false
// 1 != '1'    // false
// 1 != true   // false
// 0 != false  // false
// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
    if (val) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);


// 59 Basic JavaScript: Comparison with the Strict Inequality Operator
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

// Examples

// 3 !==  3   // false
// 3 !== '3'  // true
// 4 !==  3   // true
// Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
    if (val) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

//   60 Basic JavaScript: Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, greater than operator will convert data types of values while comparing.

// Examples

// 5   >  3   // true
// 7   > '3'  // true
// 2   >  3   // false
// '1' >  9   // false
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val) {  // Change this line
      return "Over 100";
    }
  
    if (val) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

// 61 Basic JavaScript: Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, greater than or equal to operator will convert data types while comparing.

// Examples

// 6   >=  6   // true
// 7   >= '3'  // true
// 2   >=  3   // false
// '7' >=  9   // false
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val) {  // Change this line
      return "20 or Over";
    }
  
    if (val) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

//   62 Basic JavaScript: Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

// Examples

// 2   < 5  // true
// '3' < 7  // true
// 5   < 5  // false
// 3   < 2  // false
// '8' < 4  // false

// Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
    if (val) {  // Change this line
      return "Under 25";
    }
  
    if (val) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

//   63 Basic JavaScript: Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

// Examples

// 4   <= 5  // true
// '7' <= 7  // true
// 5   <= 5  // true
// 3   <= 2  // false
// '8' <= 4  // false
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
    if (val) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

//   64 Basic JavaScript: Comparisons with the Logical And Operator
// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if:

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".


function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val) {
      if (val) {
        return "Yes";
      }
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

//   65 Basic JavaScript: Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//   66 Basic JavaScript: Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }
// Combine the if statements into a single if/else statement.
function testElse(val) {
    var result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    if (val <= 5) {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//   67 Basic JavaScript: Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// Convert the logic to use else if statements.
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    if (val < 5) {
      return "Smaller than 5";
    }
  
    return "Between 5 and 10";
  }
  
  testElseIf(7);

//   68 Basic JavaScript: Logical Order in If Else Statements
// Order is important in if, else if statements.

// The function is executed from top to bottom so you will want to be careful of what statement comes first.

// Take these two functions as an example.

// Here's the first:

// function foo(x) {
//   if (x < 1) {
//     return "Less than one";
//   } else if (x < 2) {
//     return "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// And the second just switches the order of the statements:

// function bar(x) {
//   if (x < 2) {
//     return "Less than two";
//   } else if (x < 1) {
//     return "Less than one";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// While these two functions look nearly identical if we pass a number to both we get different outputs.

// foo(0) // "Less than one"
// bar(0) // "Less than two"
// Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

//   69 Basic JavaScript: Chaining If Else Statements
// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

// if (condition1) {
//   statement1
// } else if (condition2) {
//   statement2
// } else if (condition3) {
//   statement3
// . . .
// } else {
//   statementN
// }
// Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"

function testSize(num) {
    // Only change code below this line
  
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);

// 70  Basic JavaScript: Golf Code
// In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);


