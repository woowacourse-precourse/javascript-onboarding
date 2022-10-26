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

  function RETURN_WINNER_COMPARED_TWO_NUMBER(number1, number2) {
    const inputNumber1 = Number(number1);
    const inputNumber2 = Number(number2);

    if (inputNumber1 > inputNumber2) {
      return 1;
    }
    if (inputNumber1 === inputNumber2) {
      return 0;
    }
    if (inputNumber1 < inputNumber2) {
      return 2;
    }
  }

  //#5. 배열 중 가장 큰 숫자를 도출하는 함수

  function RETURN_MAX_NUM_IN_LIST(list) {
    let tempMaxNumber = 0;
    const inputList = list.slice();

    for (let i of inputList) {
      if (Number(i) > tempMaxNumber) {
        tempMaxNumber = Number(i);
      }
    }
    return tempMaxNumber;
  }

  //특이사항

  //!1. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않음
  // [1] 혹은 [400]의 숫자는 주어지는 예시에 포함되어서는 안됨
  // 처리방법 1. __test__에서 해당 예시가 들어가지 않게끔 변경
  // 처리방법 2. problem1.js에서 해당 숫자가 들어온다면 곧바로 에러를 return


  //!2.페이지 수가 홀,짝으로 시작되지 않을 경우
    // #6 배열의 숫자가 홀수, 짝수 순서대로 진행되는지 확인하는 함수
  function CHECK_LIST_ODD_TO_EVEN (list) {
    

    const inputList = list.slice();
    const leftNum = Number(inputList[0])
    const rightNum = Number(inputList[1])

    if(leftNum % 2 !== 1){
      return false;
    } else if (rightNum %2 !== 0){
      return false;
    } else {
      return true;
    }

  }

  //!3.페이지 수가 1 차이가 나지 않을 경우.

  // 실행
  let answer;

  const pobiNumList = pobi.slice();
  const pobiNumCalculList = [];
  let pobiMaxNum;

  pobiNumList.forEach((number) =>
    pobiNumCalculList.push(RETURN_EACH_DIGIT_MULTIPLIED(number))
  );
  pobiNumList.forEach((number) =>
    pobiNumCalculList.push(RETURN_WINNER_COMPARED_TWO_NUMBER(number))
  );

  pobiMaxNum = RETURN_MAX_NUM_IN_LIST(pobiNumCalculList);

  const crongNumList = crong.slice();
  const crongNumCalculList = [];
  let crongMaxNum;

  crongNumList.forEach((number) =>
    crongNumCalculList.push(RETURN_EACH_DIGIT_MULTIPLIED(number))
  );
  crongNumList.forEach((number) =>
    crongNumCalculList.push(RETURN_WINNER_COMPARED_TWO_NUMBER(number))
  );

  crongMaxNum = RETURN_MAX_NUM_IN_LIST(crongNumCalculList);

  console.log(pobiMaxNum,crongMaxNum)

  answer = RETURN_WINNER_COMPARED_TWO_NUMBER(pobiMaxNum, crongMaxNum);

  return answer;
}

module.exports = problem1;
