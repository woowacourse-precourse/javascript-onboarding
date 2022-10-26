function problem1(pobi, crong) {
  // 예외사항은 -1
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  if (pobi[0] === 1 || crong[0] === 1 || pobi[1] === 400 || crong[1] === 400)
    return -1;

  const pobiResult = CalAndSort(pobi, []);
  const crongResult = CalAndSort(crong, []);

  //포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0,
  if (pobiResult[0] > crongResult[0]) {
    return 1;
  } else if (pobiResult[0] < crongResult[0]) {
    return 2;
  } else {
    return 0;
  }
}

//각 페이지 계산하고 정렬
const CalAndSort = (req, res) => {
  req.map((num) => {
    res.push(sumDigit(num));
    res.push(multiplyDigit(num));
  });
  return res.sort((a, b) => b - a);
};

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

module.exports = problem1;
