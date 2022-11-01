function problem1(pobi, crong) {
  var answer;
  let pobiMax = [];
  var crongMax = [];

  //예외처리 : early return
  if (pobi[0] - pobi[1] !== -1 || crong[0] - crong[1] !== -1) {
    answer = -1;
    return answer;
  }

  // 포비와 크롱의 왼쪽, 오른쪽 페이지 합과 곱 중 가장 큰 수 구하기
  pobi.map((num) => {
    pobiMax.push(sum(num));
    pobiMax.push(multiple(num));
  });

  pobiMax = Math.max(...pobiMax);

  crong.map((num) => {
    crongMax.push(sum(num));
    crongMax.push(multiple(num));
  });

  crongMax = Math.max(...crongMax);

  // 포비와 크롱의 가장 큰 수 비교 후 승자 선택
  if (pobiMax > crongMax) answer = 1;
  if (pobiMax < crongMax) answer = 2;
  if (pobiMax === crongMax) answer = 0;

  return answer;
}

const sum = (num) => {
  return String(num)
    .split("")
    .reduce((sum, n) => {
      return sum + parseInt(n);
    }, 0);
};

const multiple = (num) => {
  return String(num)
    .split("")
    .reduce((mul, n) => {
      return mul * parseInt(n);
    }, 1);
};

module.exports = problem1;
