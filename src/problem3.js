function problem3(number) {
  let answer;

  let arr = numberArr(number);

  answer = arr.filter(
    (element) => "3" === element || "6" === element || "9" === element
  ).length;

  return answer;
}

function numberArr(number) {
  return Array.from({ length: number }, (_, idx) => idx + 1)
    .join("")
    .split("");
}

console.log(problem3(333));

module.exports = problem3;
