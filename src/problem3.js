function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let stringNum = String(i);
    for (let j = 0; j < stringNum.length; j++) {
      if (stringNum[j] === "3" || stringNum[j] === "6" || stringNum[j] === "9")
        answer++;
    }
  }
  return answer;
}

module.exports = problem3;
