function problem3(number) {
  var answer;

  let count = 0;

  count = count369(number, count);

  answer = count;
  return answer;
}

// 3,6,9 개수를 세는 함수
function count369(number, count) {
  for (let i = 1; i <= number; i++) {
    const currentNum = i.toString().trim().split("").map(Number);

    for (let j = 0; j < currentNum.length; j++) {
      if (currentNum[j] == 3) {
        count++;
      }
      if (currentNum[j] == 6) {
        count++;
      }
      if (currentNum[j] == 9) {
        count++;
      }
    }
  }
  return count;
}
module.exports = problem3;