function countHotelRent(days) {
  const oneToTenDaysRent = 500;
  const elevenToTwentyDaysRent = 300;
  const twentyOneToThirtyDaysRent = 100;
  const generalRent = 350;
  let rent = "";
  if (days <= 10) {
    rent = days * oneToTenDaysRent;
    return rent;
  } else if (days <= 20) {
    rent = days * elevenToTwentyDaysRent;
    return rent;
  } else if (days >= 21 && days <= 25) {
    rent = days * twentyOneToThirtyDaysRent;
    return rent;
  } else {
    rent = days * generalRent;
    return rent;
  }
}

const result = countHotelRent(27);
console.log("Hotel rent is:", result, "Tk");
