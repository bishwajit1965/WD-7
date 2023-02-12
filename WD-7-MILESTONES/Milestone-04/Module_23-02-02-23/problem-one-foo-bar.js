const numbers = [
  3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 26, 30, 33,
  35, 45, 50, 60,
];

function conditionalPrinting(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 3 === 0 && element % 5 === 0) {
      console.log("Foo-bar", element);
    } else if (element % 3 === 0) {
      console.log("Foo", element);
    } else if (element % 5 === 0) {
      console.log("Bar", element);
    } else {
      console.log(element);
    }
  }
}

const result = conditionalPrinting(numbers);
