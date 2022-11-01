function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    var str_arr = i.toString().split("");
    str_arr.map((k) => { /* 입력받는 값까지 한바퀴 돌고, 각 숫자의 자릿수들을 문자열로 돌며 각 자리에 3,6,9가 있는지 확인 */
      if (k == "3" || k == "6" || k == "9") answer++;
    });
  }
  return answer;
}

module.exports = problem3;
