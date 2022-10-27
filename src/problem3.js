function clap(number) {
  let clapCnt = 0;
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    if (number[i] == "3" || number[i] == "6" || number[i] == "9") {
      clapCnt += 1;
    }
  }
  return clapCnt;
}

function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += clap(i);
  }
  return answer;
}

module.exports = problem3;
