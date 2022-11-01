function problem3(number) {
  // 입력받은 number를 기준으로 0까지 1씩 감소시키며 박수 치는 횟수를 구한다.
  var answer = 0;

  while (0 < number) {
    let arr_number = number.toString().split(''); // 각 자리수가 3, 6, 9인지 확인하기 편하게 number -> string -> array로 변환한다.
    for (let i = 0; i < arr_number.length; i++) {
      if (arr_number[i] == '3' || arr_number[i] == '6' || arr_number[i] == '9')
        answer++;
    }
    number--;
  }

  return answer;
}

module.exports = problem3;
