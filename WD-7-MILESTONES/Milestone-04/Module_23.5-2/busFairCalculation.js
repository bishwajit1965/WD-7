function busFairCalculation(params) {
  let rest = params % 50;
  if (rest > 0 && rest < 11) {
    let busFair = (rest * 250).toFixed(2);
    return busFair;
  } else if (rest >= 11) {
    let remaining = rest % 11;
    let busFair = (remaining * 250).toFixed(2);
    return busFair;
  } else {
    return "No bus fair will be required";
  }
}

const picnicParticipants = 512;
if (picnicParticipants < 50) {
  console.log("The number of participants should be at least 50");
} else if (picnicParticipants >= 50 && picnicParticipants % 50 === 0) {
  console.log("No bus fair needed for picnic. All will accommodate in bus.");
} else {
  const result = busFairCalculation(picnicParticipants);
  console.log(
    `The cost of bus fair for ${picnicParticipants} picnic participants will be  ${result} Tk`
  );
}
