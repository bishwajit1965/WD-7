function feetToInch(params) {
  let inch = params * 12;
  return inch;
}
let params = 30;
const result = feetToInch(params);
console.log(`${params} feet  = ${result} inches.`);
