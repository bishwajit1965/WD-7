const names = [
  "Pew Paul",
  "Pew Paul",
  "Supti Paul",
  "Runu Paul",
  "Arpita Paul",
  "Supti Paul",
  "Runu Paul",
  "Arpita Paul",
];

function removeDuplicate(params) {
  const uniqueNames = [];
  for (let i = 0; i < params.length; i++) {
    const name = params[i];
    if (uniqueNames.includes(name) === false) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
}

const result = removeDuplicate(names);
console.log(result);
