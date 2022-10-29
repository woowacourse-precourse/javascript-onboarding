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

  return answer;
}

module.exports = problem1;
