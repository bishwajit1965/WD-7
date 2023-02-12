// Problem 3.1
let numOne = 13;
let numTwo = 79;
let numThree = 45;

if (numOne > numTwo || numOne > numThree) {
  console.log("Number one is the largest number.");
} else if (numTwo > numThree || numTwo > numOne) {
  console.log("Number two is the largest number.");
} else if (numThree > numOne || numThree > numTwo) {
  console.log("Number three is the largest number.");
} else {
  console.log("The code is faulty.");
}

// Problem 3.2
const handOne = 9;
const handTwo = 8;
const handThree = 9;

if (handOne + handTwo === handTwo + handThree) {
  console.log("The given triangle is an isosceles");
} else {
  console.log("The given triangle is not an isosceles");
}
