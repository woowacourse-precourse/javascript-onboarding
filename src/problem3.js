function problem3(number) {
  var answer;
  // 제한사항
  if (number < 1 || number > 10000) return;

  answer = checkNum(number);

  return answer;
}

// 숫자 자리수에 3, 6, 9 개수 확인
function checkNum(number) {
  let arr = [];
  let answer = [];

  for (let i = 1; i <= number; i++) {
    arr.push(makeNumDigits(i));
  }
  for (let i = 0; i < arr.length; i++) {
    answer.push(
      arr[i].filter(
        (element) => "3" === element || "6" === element || "9" === element
      ).length
    );
  }

  let result = answer.reduce((sum, currValue) => sum + currValue);

  return result;
}

// 숫자 자리수로 나누기
function makeNumDigits(num) {
  num = num.toString();
  let array = [];
  for (let i = 0; i < num.length; i++) {
    array.push(num[i]);
  }
  return array;
}

module.exports = problem3;
