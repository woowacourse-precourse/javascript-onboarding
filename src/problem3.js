function problem3(number) {}

function checkNumber(number) {
  const arrayNumber = number.toString().split("");
  let result = arrayNumber.filter(
    (item) => item == "3" || item == "6" || item == "9"
  );
  return result.length;
}

module.exports = problem3;
