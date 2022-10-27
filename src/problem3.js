function problem3(number) {
  // 필요함수

  //#1. 주어진 숫자에 3,6,9가 몇 번 포함되는지 반환하는 함수

  function RETURN_COUNT_INCLUDED_THREE_SIX_NINE(number) {
    let count = 0;
    const inputNumberString = String(number);
    const numberList = inputNumberString.split("").map((i) => +i);
    for (let i of numberList) {
      if (i === 3 || i === 6 || i === 9) {
        count += 1;
      }
    }
    return count;
  }

  // 특이사항

  //!1. 숫자는 1이상 10,000 이하인 자연수.

  var answer;
  return answer;
}

module.exports = problem3;
