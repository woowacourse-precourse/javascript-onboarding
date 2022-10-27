function getMultipleThree(number) {
  let totalNumber = 0;
  let index = 3;

  while (index <= number) {
    let numberArray = index.toString().split("");
    numberArray.map((number) => {
      if (number == 3 || number == 6 || number == 9) {
        totalNumber++;
      }
    });
    index++;
  }
  return totalNumber;
}

function problem3(number) {
  return getMultipleThree(number);
}

module.exports = problem3;
