const Math = 80;
const Chemistry = 81;
const Physics = 75;
const Biology = 85;
const Bengali = 85;

const averageMarks = (
  (Math + Chemistry + Physics + Biology + Bengali) /
  5
).toFixed(2);
console.log("The average mark is: ", averageMarks);
