// Finding out the negative number using reduce
var array = [1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52],
  sum = array.reduce(function (r, a) {
    return a > 0 ? r + a : r;
  }, 0);
console.log(sum);

// Finding out the negative number using reduce
const numbers = [3, 4, -5, 6, -7, 8, 9, -10, -52, -13, -25, 35, 36, 52];
let sum = numbers.reduce(function (a, b) {
  return b > 0 ? a + b : a;
}, 0);
console.log(sum);

// Finding out the negative number and pushing the positive numbers into an empty array
function returnValue(numbers) {
  const negatives = [];
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negatives.push(numbers[i]);
    } else {
      sum += numbers[i];
    }
  }
  return sum;
}

const result = returnValue(numbers);
console.log(result);
