function bigger(array) {
  // 왼쪽 페이지 숫자 각 자릿수 얻기
  const leftHundreds = Math.floor(array[0] / 100);
  const leftTens = Math.floor((array[0] % 100) / 10);
  const leftUnits = (array[0] % 100) % 10;

  // 오른쪽 페이지 숫자 각 자릿수 얻기
  const rightHundreds = Math.floor(array[1] / 100);
  const rightTens = Math.floor((array[1] % 100) / 10);
  const rightUnits = (array[1] % 100) % 10;

  // 왼쪽 계산 결과 중 제일 큰 수
  const leftResult = Math.max(
    leftHundreds + leftTens + leftUnits,
    (leftHundreds ? leftHundreds : 1) * (leftTens ? leftTens : 1) * leftUnits
  );
  // 오른쪽 계산 결과 중 제일 큰 수
  const rightResult = Math.max(
    rightHundreds + rightTens + rightUnits,
    (rightHundreds ? rightHundreds : 1) *
      (rightTens ? rightTens : 1) *
      rightUnits
  );
  // 왼쪽, 오른쪽 계산 결과 수 중 더 큰 수를 리턴.
  return Math.max(leftResult, rightResult);
}

function problem1(pobi, crong) {
  if (pobi.length > 2 || pobi.length < 2) return -1;
  if (crong.length > 2 || crong.length < 2) return -1;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  const pobiResult = bigger(pobi);

  const crongResult = bigger(crong);

  if (pobiResult > crongResult) {
    return 1;
  } else if (pobiResult < crongResult) {
    return 2;
  } else return 0;
}

module.exports = problem1;
