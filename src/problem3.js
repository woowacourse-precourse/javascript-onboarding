function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    var temp = i.toString();
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "3" || temp[j] === "6" || temp[j] === "9") {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
