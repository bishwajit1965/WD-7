function testJs(params) {
  if (params.endsWith(".js")) {
    return "valid JavaScript";
  } else {
    return "not a valid JavaScript";
  }
}
const fileName = "hello.js";
const result = testJs(fileName);
console.log(`The ${fileName} file is a ${result} file. `);
