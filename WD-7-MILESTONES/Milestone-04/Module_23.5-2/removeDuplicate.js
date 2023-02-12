function removeDuplicate(params) {
  let unique = [];
  for (i = 0; i <= params.length - 1; i++) {
    const name = params[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const names = ["Pew", "Pew", "Arpita", "Runu", "Supti", "Supti", "Runu"];
const result = removeDuplicate(names);
console.log(result);
