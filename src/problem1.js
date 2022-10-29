function problem1(pobi, crong) {
  let answer;

  // 페이지의 각 자릿수를 더하는 함수
  function plusValue(arr) {
    let result = 0;
    let a = String(arr);

    for (let i = 0; i < a.length; i++) {
      result += parseInt(a[i]);
    };

    return result;
  };

  // 페이지의 각 자릿수를 곱하는 함수
  function multiplyValue(arr) {
    let result = 1;
    let a = String(arr);

    for (let i = 0; i < a.length; i++) {
      result *= parseInt(a[i]);
    };

    return result;
  };

  // 더한값과 곱한값 두개 중 더 큰수를 반환하는 함수
  function resultValue(plus, multiply) {
    let result;
    if (plus > multiply) {
      result = plus;
    } else {
      result = multiply;
    }

    return result;
  };

  // pobi
  let pobiLeftPlusValue = plusValue(pobi[0]);
  let pobiRightPlusValue = plusValue(pobi[1]);

  let pobiLeftMultiplyValue = multiplyValue(pobi[0]);
  let pobiRightMultiplyValue = multiplyValue(pobi[1]);

  let pobiLeftVaule;
  let pobiRightValue;

  let pobiResultValue;



  return answer;
}

module.exports = problem1;
