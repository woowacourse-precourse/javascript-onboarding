function problem3(number) {
  return getClapNumber(number);
}

function getClapNumber(number) {
  let counter = 0;

  for (let i = 1; i <= number; i++) {
    counter += i.toString().split("3").length - 1;
    counter += i.toString().split("6").length - 1;
    counter += i.toString().split("9").length - 1;
  }

  return counter;
}

module.exports = problem3;
