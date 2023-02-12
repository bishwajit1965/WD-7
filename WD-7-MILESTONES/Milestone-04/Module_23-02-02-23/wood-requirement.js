function woodRequirement(chair, table, cot) {
  const woodPerChair = 2;
  const woodPerTable = 5;
  const woodPerCot = 10;
  const pricePerCft = 1200;

  const totalWoodPerChair = chair * woodPerChair;
  const totalWoodPerTable = table * woodPerTable;
  const totalWoodPerCot = cot * woodPerCot;

  const grandTotalWood =
    totalWoodPerChair + totalWoodPerTable + totalWoodPerCot;
  const grandTotalPrice = grandTotalWood * pricePerCft;
  console.log(grandTotalPrice);
  if (grandTotalPrice >= 5000) {
    const commission = grandTotalPrice * 0.05;
    const payablePrice = grandTotalPrice - commission;
    return payablePrice;
  }
}

const result = woodRequirement(1, 1, 1);
console.log("", result, "Tk");
