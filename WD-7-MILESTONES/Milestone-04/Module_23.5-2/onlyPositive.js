function onlyPositive(params) {
  let positive = [];
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    if (element > 0) {
      positive.push(element);
    } else {
      if (element < 0) {
        break;
      }
    }
  }
  return positive;
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, 12, 13, 14, 15, 16, 17, 18, 19, -20,
];

const result = onlyPositive(numbers);
console.log(result);
