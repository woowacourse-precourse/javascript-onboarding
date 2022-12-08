function problem3(number) {
  let answer;

  let arr = numberArr(number);

  answer = arr.filter(
    (element) => ['3', '6', '9'].includes(element)
  ).length;

  return answer;
}

function numberArr(number) {
  return Array.from({ length: number }, (_, idx) => idx + 1)
    .join("")
    .split("");
}

module.exports = problem3;
