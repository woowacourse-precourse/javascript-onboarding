function makeSlicedNumber(page) {
  return page
    .toString()
    .split("")
    .map((num) => parseInt(num));
}

function problem1(pobi, crong) {
  const [leftPagePobi, rightPagePobi] = pobi;
  const [leftPageCrong, rightPageCrong] = crong;

  // 오른쪽 페이지와 왼쪽 페이지의 차이가 1보다 크면 result = -1
  if (rightPagePobi - leftPagePobi > 1 || rightPageCrong - leftPageCrong > 1)
    return -1;

  // 페이지 번호를 각 자리 단위로 잘라냄 ex. 97 -> [9, 7]
  const slicedLeftNumberPobi = makeSlicedNumber(leftPagePobi);
  const slicedRightNumberPobi = makeSlicedNumber(rightPagePobi);
  const slicedLeftNumberCrong = makeSlicedNumber(leftPageCrong);
  const slicedRightNumberCrong = makeSlicedNumber(rightPageCrong);

  // 포비의 각 자리 숫자의 합과 곱을 구함
  const sumOfSlicedLeftNumberPobi = slicedLeftNumberPobi.reduce(
    (acc, num) => acc + num
  );
  const productOfSlicedLeftNumberPobi = slicedLeftNumberPobi.reduce(
    (acc, num) => acc * num
  );

  const sumOfSlicedRightNumberPobi = slicedRightNumberPobi.reduce(
    (acc, num) => acc + num
  );
  const productOfSlicedRightNumberPobi = slicedRightNumberPobi.reduce(
    (acc, num) => acc * num
  );

  // 포비의 각 자리 숫자의 합과 곱 중에 큰 수를 구함
  const maxLeftNumberPobi = Math.max(
    sumOfSlicedLeftNumberPobi,
    productOfSlicedLeftNumberPobi
  );
  const maxRightNumberPobi = Math.max(
    sumOfSlicedRightNumberPobi,
    productOfSlicedRightNumberPobi
  );

  // 크롱의 각 자리 숫자의 합과 곱을 구함
  const sumOfSlicedLeftNumberCrong = slicedLeftNumberCrong.reduce(
    (acc, num) => acc + num
  );
  const productOfSlicedLeftNumberCrong = slicedLeftNumberCrong.reduce(
    (acc, num) => acc * num
  );

  const sumOfSlicedRightNumberCrong = slicedRightNumberCrong.reduce(
    (acc, num) => acc + num
  );
  const productOfSlicedRightNumberCrong = slicedRightNumberCrong.reduce(
    (acc, num) => acc * num
  );

  // 크롱의 각 자리 숫자의 합과 곱 중에 큰 수를 구함
  const maxLeftNumberCrong = Math.max(
    sumOfSlicedLeftNumberCrong,
    productOfSlicedLeftNumberCrong
  );
  const maxRightNumberCrong = Math.max(
    sumOfSlicedRightNumberCrong,
    productOfSlicedRightNumberCrong
  );

  // 포비와 크롱의 가장 큰 숫자(점수)를 구함
  const maxNumberPobi = Math.max(maxLeftNumberPobi, maxRightNumberPobi);
  const maxNumberCrong = Math.max(maxLeftNumberCrong, maxRightNumberCrong);

  // 포비와 크롱의 점수를 비교함
  const answer =
    maxNumberPobi === maxNumberCrong
      ? 0
      : maxNumberPobi > maxNumberCrong
      ? 1
      : 2;
  return answer;
}

module.exports = problem1;
