function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let iStr = String(i);
    for (let z = 0; z < iStr.length; z++) {
      if (iStr[z] == "3" || iStr[z] == "6" || iStr[z] == "9") {
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
