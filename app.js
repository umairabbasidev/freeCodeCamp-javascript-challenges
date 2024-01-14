// 1) Comment Your JavaScript Code

// This is an in-line comment
// This is multi-line comment 

// 2) Declare JavaScript Variables

  var myName;

  // 3) Storing Values with the Assignment Operator

  var a;
  a = 7;

  // 4)

  // Assigning the Value of One Variable to Another

  var a;
  a = 7;
  var b;
  b = a;

  // 5) Initializing Variables with the Assignment Operator

var a = 9;

// 6) Declare String Variables

var myFirstName;
myFirstName = "Muhammad Umair"

var myLastName = "Abbasi"

// 7) Understanding Uninitialized Variables


var a;
var b;
var c;

 a = 5;
 b = 10;
 c = "I am a String !"

 // console.table([a,b,c])

 // 8) Understanding Case Sensitivity in Variables

 var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9) Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

// 10) Declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
// console.log(FCC,fact)


// 11) Add Two Numbers with JavaScript

const sum = 10 + 10;
// console.log(sum)

// 12) Subtract One Number from Another with JavaScript

const difference = 45-33;
// console.log(difference)

// 13) Multiply Two Numbers with JavaScript

// const product = 8 * 10;
// console.log(product)

// 14) Divide One Number by Another with JavaScript

const quotient = 66/33;
// console.log(quotient)

// 15) Increment a Number with JavaScript

let myVar = 87;
myVar++;
// console.log(myVar)


// 16) Decrement a Number with JavaScript
let myVar2 = 11;
myVar2--;
// console.log(myVar2)


// 17) Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

const myDecimal = ourDecimal;
// console.log(myDecimal)

// 18) Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;
console.log(product)

// 19) Divide One Decimal by Another with JavaScript

const quotient2 = 4.4 / 2.0; 
console.log(quotient2)


// 20) Finding a Remainder in JavaScript
const remainder = 11 % 3;
console.log(remainder)
  
// 21) Compound Assignment With Augmented Addition

let a = 3;
let b = 17;
let c = 12;


a += 12; // instead of a = a + 12
b += 9 ;   
c += 7;
// console.log(a,b,c)

// 22)  Compound Assignment With Augmented Substraction

let a = 11;
let b = 9;
let c = 3;


a -= 6;
b -= 15;
c -= 1;
// console.log(a,b,c)


// 23)  Compound Assignment With Augmented multiplication

let a = 5;
let b = 12;
let c = 4.6;



a*= 5;
b*= 3;
c*=10;
console.log(a,b,c)



// 24)  Compound Assignment With Augmented division

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;


console.log(a,b,c)

// 25) Escaping Literal Quotes in Strings

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 


// 26) Quoting Strings with Single Quotes

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 26) Escape Sequences in Strings

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
// console.log(myStr)



// 27) Concatenating Strings with Plus Operator

// const myStr = "This is the start." + " This is the end."; 
// console.log(myStr)


// 28) Concatenating Strings with the Plus Equals Operator



// let myStr = "This is the first sentence. ";
// myStr += "This is the second sentence."

// console.log(myStr)


// 29) Constructing Strings with Variables

// const myName = "Muhammad Umair Abbasi";
// const myStr = "My name is " + myName + " and I an well";
// console.log(myStr)


// 30) Appending Variables to Strings Plus Equals Operator

/*const someAdjective = "Wonderful";
let myStr = "Learning to code is "

myStr += someAdjective
// myStr = myStr + someAdjective // same as above

console.log(myStr)*/

// 31) Find the Length of a String

// let lastNameLength = 0;
// const lastName = "Lovelace";

// // Only change code below this line
// lastNameLength = lastName.length;
// console.log(lastNameLength)

// 32) Use Bracket Notation to Find the First Character in a String

// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// firstLetterOfLastName = lastName[0]; 
// console.log(firstLetterOfLastName)

// 33) Understand String Immutability

// let myStr = "Jello World";
// myStr = "Hello World"; 
// console.log(myStr)


// 34) Use Bracket Notation to Find the Nth Character in a String
// const lastName = "Lovelace";

// const thirdLetterOfLastName = lastName[2]; 
// console.log(thirdLetterOfLastName)

// 35) Use Bracket Notation to Find the Last Character in a String

// const lastName = "Lovelace";

// const lastLetterOfLastName = lastName[lastName.length-1];

// console.log(lastLetterOfLastName)


// 36) Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastName = "Lovelace";


const secondToLastLetterOfLastName = lastName[lastName.length-2]; 

// console.log(lastName)
// console.log(secondToLastLetterOfLastName)
// console.log(lastName.length-2)

// 36) Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective + " " +  myNoun + " " + myVerb + " " + myAdverb; // Change this line

// console.log(wordBlanks)

