const numbers = [2, 3, -5, -6, 7, -8, 9, 10, -11, 12, 15];

const posNumbers = removeNegativeNumbers(numbers, (x) => x >= 0);

function removeNegativeNumbers(numbers, callback) {
  const posArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      posArray.push(x);
    }
  }
  return posArray;
}

const result = posNumbers;
console.log(result);

fo;
