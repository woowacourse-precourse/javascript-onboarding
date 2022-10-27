function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  //오만원,만원,오천,천,오백,백,오십,십,일
  var cur = money;
  var dollar = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  var num = 0;
  while (cur !== 0) {
    answer[num] = parseInt(cur / dollar[num]);

    cur = cur % dollar[num];
    num++;
  }
  return answer;
}

module.exports = problem5;
