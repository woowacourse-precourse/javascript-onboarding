function problem1(pobi, crong) {
  //필요함수

  //#1. 각 자리의 숫자를 모두 더하는 함수

  function RETURN_EACH_DIGIT_ADDED(number) {
    let output = 0;
    const inputNumberToString = String(number);
    const inputNumberList = inputNumberToString.split("").map((i) => +i);
    inputNumberList.forEach((number) => (output += number));

    return output;
  }

  //#2. 각 자리의 숫자를 모두 곱하는 함수

  function RETURN_EACH_DIGIT_MULTIPLIED(number) {
    let output = 1;
    const inputNumberToString = String(number);
    const inputNumberList = inputNumberToString.split("").map((i) => +i);
    for (let i = 0; i < inputNumberList.length; i++) {
      if (inputNumberList[i] === 0) {
        output = 0;
        break;
      } else {
        output *= inputNumberList[i];
      }
    }

    return output;
  }

  //#3. 두 개의 숫자를 비교해 큰 수를 도출하는 함수
    //숫자가 같다면 첫번째 수를 return합니다.
  function RETURN_LARGE_COMPARED_TWO_NUMBER(number1, number2) {
    const inputNumber1 = Number(number1);
    const inputNumber2 = Number(number2);

    if (inputNumber1 >= inputNumber2) {
      return inputNumber1;
    } else {
      return inputNumber2;
    }
  }

  //#4. 두 숫자를 비교해 게임의 승자를 알려주는 함수

  //특이사항

  //!1. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않음
  // [1] 혹은 [400]의 숫자는 주어지는 예시에 포함되어서는 안됨
  // 처리방법 1. __test__에서 해당 예시가 들어가지 않게끔 변경
  // 처리방법 2. problem1.js에서 해당 숫자가 들어온다면 곧바로 에러를 return

  // var answer;
  // return answer;
}

module.exports = problem1;
