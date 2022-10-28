function problem3(number) {
  var answer;
  var isThree = 0;
  var isSix = 0;
  var isNine = 0;

  for (let i = 0; i < number + 1; i++) {
    let num = String(i);

    // 각 숫자에 3, 6, 9의 개수를 확인하다.
    isThree += num.split("3").length - 1;
    isSix += num.split("6").length - 1;
    isNine += num.split("9").length - 1;
  }

  return answer;
}

module.exports = problem3;
