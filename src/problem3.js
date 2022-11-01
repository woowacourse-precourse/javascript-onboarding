function problem3(number) {
  var answer;
  let countClap;

  // for문으로 1부터 number까지 반복
  for (let i = 1; i <= number; i++) {
    countClap += checkClap(i);
    console.log(i, checkClap(i));
  }

  return answer;
}

// 3, 6, 9 발견 함수
function checkClap(num) {}

module.exports = problem3;
