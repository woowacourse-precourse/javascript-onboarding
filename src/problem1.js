function problem1(pobi, crong) {
  // 첫 결과 값 0 선언
  let result = 0;

  // 각각의 값 중 가장 높은 값 추출 함수

  let MaxPobi = GetBicValue(pobi);
  let MaxCrong = GetBicValue(crong);

  function GetBicValue(name) {
    if (
      // 1. 연속적인지 확인
      // 2. 첫번째 페이지의 값이 홀수 인지 확인
      // 3. 첫페이지 1인 경우 확인
      // 4. 마지막페이지 400인 경우 확인
      Math.abs(name[0] - name[1]) === 1 &&
      name[0] % 2 !== 0 &&
      name[0] !== 1 &&
      name[1] !== 400
    ) {
      // 배열을 값을 숫자열을 문자열로 바꾸고 재배열 및 2중배열으로 나타냄
      let check = name.map((value) => value.toString().split(""));
      let checkresult = [];
      // for 문을 통해서 문자열을 숫자열로 치환 후 각 값에 합과 곱을 구해서 배열에 넣어줌
      for (let i = 0; i < check.length; i++) {
        checkresult.push(
          check[i].reduce((prev, acc) => parseInt(prev) + parseInt(acc))
        );
        checkresult.push(
          check[i].reduce((prev, acc) => parseInt(prev) * parseInt(acc))
        );
        // 배열을 전개연산자로 만들고 최대값 구하기
        return Math.max(...checkresult);
      }
    }
    //위의 조건문에 만족하지 않으면 -1값 나타냄
    return -1;
  }

  // 예외사항 확인
  if (MaxPobi === -1 && MaxPobi === -1) {
    // 둘중 하나라도 있으면 결과값 -1 리턴
    return (result = -1);
  } else {
    //아니면 비교
    compare(MaxPobi, MaxCrong);
  }

  // 추출된 값 비교
  function compare(MaxPobi, MaxCrong) {
    if (MaxPobi == MaxCrong) {
      result = 0;
    } else if (MaxPobi > MaxCrong) {
      result = 1;
    } else {
      result = 2;
    }
  }
  return result;
}
module.exports = problem1;
