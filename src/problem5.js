/** 입력값을 단위별로 나누어 저장하는 기능 **/
function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 오만, 만, 오천, 천, 오백, 백, 오십, 일
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i <= 9; i++) {
    if (parseInt(money / unit[i]) > 0) {
      answer[i] = parseInt(money / unit[i]);
      money = parseInt(money % unit[i]);
    }
  }

  return answer;
}

module.exports = problem5;
