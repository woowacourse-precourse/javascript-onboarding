function problem1(pobi, crong) {
  //각 자리수 더하기
  const sumDigit = (num) => {
    let res = 0;
    while (num > 0) {
      res += Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  };

  //각 자리수 곱하기
  const multiplyDigit = (num) => {
    let res = 1;
    while (num > 0) {
      if (num < 0) break;
      res *= Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  };

  // 예외사항은 -1
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  if (pobi[0] === 1 || crong[0] === 1 || pobi[1] === 400 || crong[1] === 400)
    return -1;

  let pobiNum;
  let crongNum;

  pobi.map((num) =>
    sumDigit(num) > multiplyDigit(num)
      ? (pobiNum = sumDigit(num))
      : (pobiNum = multiplyDigit(num))
  );

  crong.map((num) =>
    sumDigit(num) > multiplyDigit(num)
      ? (crongNum = sumDigit(num))
      : (crongNum = multiplyDigit(num))
  );

  //포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0,
  if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
