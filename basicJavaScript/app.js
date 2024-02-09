// 1) Comment Your JavaScript Code

// This is an in-line comment.
/* This is a
multi-line comment */

// 2) Declare JavaScript Variables

// var myName;

// 3) Storing Values with the Assignment Operator

// var a;
// a = 7;

// 4) Assigning the Value of One Variable to Another

// var a;
// a = 7;
// var b;
// b = a;

// 5) Initializing Variables with the Assignment Operator

// var a = 9;

// 6) Declare String Variables

// var myFirstName = "Muhammad Umair";
// var myLastName = "Abbasi";

// 7) Understanding Uninitialized Variables

// var a = 5;
// var b = 10;
// var c = "I am a";

// a = a + 1;
// b = b + 5;
// c = c + " String!";
// console.log([a,b,c])

// 8) Understanding Case Sensitivity in Variables

// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// 9) Explore Differences Between the var and let Keywords

// let catName = "Oliver";
// let catSound = "Meow!";

// 10)

// const FCC = "freeCodeCamp";
// let fact = "is cool!";
// fact = "is awesome!";
// console.log(FCC, fact);

// 11) Add Two Numbers with JavaScript

// const sum = 10 + 10;

// 12) Subtract One Number from Another with JavaScript

// const difference = 45 - 33;

// 13) Multiply Two Numbers with JavaScript

// const product = 8 * 10;

// 14) Divide One Number by Another with JavaScript

// const quotient = 66 / 33;

// 15) Increment a Number with JavaScript

// let myVar = 87;
// myVar++;

// 16) Decrement a Number with JavaScript

// let myVar = 11;

// myVar--;

// 17) Create Decimal Numbers with JavaScript

// let myDecimal = 5.7;

// 18) Multiply Two Decimals with JavaScript

// const product = 2.0 * 2.5;

// 19) Divide One Decimal by Another with JavaScript

// const quotient = 4.4 / 2.0;

// 20) Finding a Remainder in JavaScript

// const remainder = 11 % 3;

// 21) Compound Assignment With Augmented Addition

// let a = 3;
// let b = 17;
// let c = 12;

// a += 12;
// b += 9;
// c += 7;

// 22) Compound Assignment With Augmented Subtraction

// let a = 11;
// let b = 9;
// let c = 3;

// a -= 6;
// b -= 15;
// c -= 1;

// 23) Compound Assignment With Augmented Multiplication

// let a = 5;
// let b = 12;
// let c = 4.6;

// a *= 5;
// b *= 3;
// c *= 10;

// 24) Compound Assignment With Augmented Division

// let a = 48;
// let b = 108;
// let c = 33;

// a /= 12;
// b /= 4;
// c /= 11;

// 25) Escaping Literal Quotes in Strings

// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 26)

// 27) Escape Sequences in Strings 

// FirstLine
//     \SecondLine
// ThirdLine

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
// console.log(myStr)

// 28)  Concatenating Strings with Plus Operator

// const myStr = "This is the start." + " This is the end.";

// 29) Concatenating Strings with the Plus Equals Operator

// let myStr = "This is the first sentence.";
// myStr+= " This is the second sentence.";
// console.log(myStr)

// 30) Constructing Strings with Variables

// const myName = "Muhammad Umair Abbasi";
// const myStr = "My name is " + myName + " and I am well!";
// console.log(myStr)

// 31) Appending Variables to Strings

// const someAdjective = "awesome!";
// let myStr = "Learning to code is ";
// myStr+= someAdjective;
// console.log(myStr)

// 32) Find the Length of a String
// console.log("Alan Peter".length);

// 33) Use Bracket Notation to Find the First Character in a String

// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// firstLetterOfLastName = lastName[0]; 

// 34) Understand String Immutability

// let myStr = "Jello World";
// myStr = "Hello World"; 

// 35) Use Bracket Notation to Find the Nth Character in a String

// const lastName = "Lovelace";
// const thirdLetterOfLastName = lastName[2];

// 36) Use Bracket Notation to Find the Last Character in a String

// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length-1]; 

// // 37)  Use Bracket Notation to Find the Nth-to-Last Character in a String

// const lastName = "Lovelace";
// const secondToLastLetterOfLastName = lastName[lastName.length-2]

// 38) Word Blanks 

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// const wordBlanks = myAdjective + " " +  myNoun + " " +myVerb + " "+ myAdverb; 
// console.log(wordBlanks)


// 39) Store Multiple Values in one Variable using JavaScript Arrays

// const myArray = ["lapton",10,"mobiles",20];

// 40) Nest one Array within Another Array

// const myArray = [["laptopn",50],["mobiles",100]];

// 41) Access Array Data with Indexes

// const myArray = [50, 60, 70];
// const myData = myArray[0]

// 42) Modify Array Data With Indexes 
// const myArray = [18, 64, 99];
// myArray[0] = 45;

// 43) Access Multi-Dimensional Arrays With Indexes

// const myArray = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
//  [[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];
// console.log(myData)


// 44) Manipulate Arrays With push Method

// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog",3])
// console.log(myArray)

// 45) Manipulate Arrays With pop Method

// const myArray = [["John", 23], ["cat", 2]];
// myArray.pop()
// console.log(myArray)

// 46) Manipulate Arrays With shift Method

// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift()

// 47) Manipulate Arrays With unshift Method

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// 48) Shopping List

// const myList = [];
// myList.unshift(["laptop",10],["mobiles",20],["watches",30],["chargers",40],["keyboard",50])
// console.log(myList)





