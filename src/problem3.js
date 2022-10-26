function problem3(number) {
  let sum = 0;

  for (let i = number; i >= 1; i--) {
    sum += checkNumber(i);
  }
  return sum;
}

function checkNumber(number) {
  const arrayNumber = number.toString().split("");
  let result = arrayNumber.filter(
    (item) => item == "3" || item == "6" || item == "9"
  );
  return result.length;
}

module.exports = problem3;
