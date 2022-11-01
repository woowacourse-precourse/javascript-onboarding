function problem3(number) {
  var answer = 0;
  var arr = [];
  var splitnumbers;
  for (i = 1; i <= number; i++) {
    arr.push(String(i));
  }
  splitnumbers = [...arr.join("")];
  splitnumbers.forEach((e) => {
    if (e === "3" || e === "6" || e === "9") {
      answer++;
    }
  });
  return answer;
}
module.exports = problem3;
