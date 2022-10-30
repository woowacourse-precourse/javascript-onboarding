function problem3(number) {
  var answer;
  let arr = [];
  for (let i = number; i > 0; i--) {
    arr.push(i);
  }
  arr = [...arr.join("")];
  answer = arr.filter((e) => e === "3" || e === "6" || e === "9").length;
  return answer;
}

module.exports = problem3;
