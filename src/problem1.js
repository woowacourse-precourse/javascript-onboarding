function problem1(pobi, crong) {
  // 예외사항으로 -1 리턴하기
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1

  // 각 자리 숫자 모두 더하기
  const sumAllPage = (num) => {
    let res = 0;
    while (num > 0) {
      res += Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  };

  //각 자리 숫자 모두 곱하기
  const multiplyAllPage = (num) => {
    let res = 1;
    while (num > 0) {
      if (num < 0) break;
      res *= Math.floor(num % 10);
      num = Math.floor(num / 10);
    }
    return res;
  };


  // 가장 큰 수 구하기
  let pobiScore;
  let crongScore;

  pobi.map((num) =>
    sumAllPage(num) > multiplyAllPage(num) ? (pobiScore = sumAllPage(num)) : (pobiScore = multiplyAllPage(num))
  );

  crong.map((num) =>
    sumAllPage(num) > multiplyAllPage(num) ? (crongScore = sumAllPage(num)) : (crongScore = multiplyAllPage(num))
  );

  // 승자 구하기
  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
