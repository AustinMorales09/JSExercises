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
myVar = myVar + 1;

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
myVar = myVar - 1;

// 13 Basic JavaScript: Create Decimal Numbers with JavaScript
// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

var ourDecimal = 5.7;

// Only change code below this line





//14 Basic JavaScript: Multiply Two Decimals with JavaScript
// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

// Let's multiply two decimals together to get their product.

// Change the 0.0 so that product will equal 5.0.
var product = 2.0 * 0.0;


// 15 Basic JavaScript: Divide One Decimal by Another with JavaScript
// Now let's divide one decimal by another.

// Change the 0.0 so that quotient will equal to 2.2.
var quotient = 0.0 / 2.0; // Change this line

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

var remainder;

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
a = a + 12;
b = 9 + b;
c = c + 7;

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
a = a - 6;
b = b - 15;
c = c - 1;

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
a = a * 5;
b = 3 * b;
c = c * 10;

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
a = a / 12;
b = b / 4;
c = c / 11;

// 21 Basic JavaScript: Declare String Variables
// Previously we have used the code

// var myName = "your name";

// "your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

// Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.



// 22 Basic JavaScript: Escaping Literal Quotes in Strings
// When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

// var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

// Alan said, "Peter is learning JavaScript".
// var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

// I am a "double quoted" string inside "double quotes".
var myStr = ""; // Change this line

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

var myStr; // Change this line

// 24 Basic JavaScript: Concatenating Strings with the Plus Equals Operator
// We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

// Note
// Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

// Example:

// var ourStr = "I come first. ";
// ourStr += "I come second.";
// // ourStr is now "I come first. I come second."
// Build myStr over several lines by concatenating these two strings: "This is the first sentence. " and "This is the second sentence." using the += operator. Use the += operator similar to how it is shown in the editor. Start by assigning the first string to myStr, then add on the second string.

var myStr;

// 25 Basic JavaScript: Constructing Strings with Variables
// Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

// Example:

// var ourName = "Zorkbork";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";
// // ourStr is now "Hello, our name is Zorkbork, how are you?"
// Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"
var myName;
var myStr;


// 26 Basic JavaScript: Appending Variables to Strings
// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

// Example:

// var anAdjective = "awesome!";
// var ourStr = "Austin is ";
// ourStr += anAdjective;
// ourStr is now "Austin is awesome!"
// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

// Change code below this line

var someAdjective;
var myStr = "Learning to code is ";

// 27 Basic JavaScript: Find the Length of a String
// You can find the length of a String value by writing .length after the string variable or string literal.

// "Alan Peter".length; // 10

// For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

// Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName;

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
firstLetterOfLastName = lastName; // Change this line

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
myStr[0] = "H"; // Change this line
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
var thirdLetterOfLastName = lastName; // Change this line

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
var lastLetterOfLastName = lastName; // Change this line

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
var secondToLastLetterOfLastName = lastName; // Change this line

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
var wordBlanks = ""; // Change this line
// Only change code above this line