function problem3(number) {
  var answer;
  let arr = Array(number)
    .fill(0)
    .map((num, idx) => num + idx + 1)
    .join("")
    .split("");

  let count3 = arr.filter((num) => num === "3").length;
  let count6 = arr.filter((num) => num === "6").length;
  let count9 = arr.filter((num) => num === "9").length;

  answer = count3 + count6 + count9;

  return answer;
}

module.exports = problem3;
