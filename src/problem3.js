function problem3(number) {
  return getClapNumber(number);
}

function getClapNumber(number) {
  let clapNumber = 0;
  let presentNumber = 3;

  while (presentNumber <= number) {
    let numbersArray = presentNumber.toString().split("");
    numbersArray.map((number) => {
      if (number == 3 || number == 6 || number == 9) clapNumber++;
    });
    presentNumber++;
  }

  return clapNumber;
}

module.exports = problem3;
