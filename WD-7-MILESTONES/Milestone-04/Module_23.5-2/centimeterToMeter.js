function centimeterToMeter(centimeter) {
  let meter = centimeter / 100;
  return meter;
}

const centimeter = 520;
const result = centimeterToMeter(centimeter);
console.log(`${centimeter} centimeters = ${result} meters.`);
