const names = [
  "Supti",
  "Arpita",
  "Pew",
  "Runu",
  "Sagar",
  "Runu",
  "Supti",
  "Pew",
  "Arpita",
  "Sagar",
];

function removeDuplicate(params) {
  const uniqueNames = [];
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    if (uniqueNames.includes(element) === false) {
      uniqueNames.push(element);
    }
  }
  return uniqueNames;
}

const result = removeDuplicate(names);
console.log(result);
