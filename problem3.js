function problem3(number) {
  var answer;
  answer = mainResult(number);
  return answer;
}

module.exports = problem3;

function mainResult(number) {
  let result = 0;
  for (var i = 1; i <= number; i++) {
    const array = String(i).split("");
    result += array.filter(
      (num) => num === "3" || num === "6" || num === "9"
    ).length;
  }
  return result;
}
