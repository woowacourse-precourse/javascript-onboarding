function problem3(number) {
  let answer = 0;
  for (let i = 0; i <= number; i++) {
    let gameArr = String(i);
    if (gameArr.match(/[3,6,9]/g)) {
      answer += gameArr.match(/[3,6,9]/g).length;
    }
  }
  return answer;
}

module.exports = problem3;
