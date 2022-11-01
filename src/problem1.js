function problem1(pobi, crong) {
  var answer = -1;

  // 포비와 크롱이 펼친 페이지에 시작 페이지(p 1)와 마지막 페이지(p 400)가 나오지 않고,
  // 왼쪽 페이지가 홀수면서 오른쪽 페이지가 짝수이고,
  // 오른쪽 페이지 번호가 (왼쪽 페이지 번호 + 1) 인 경우
  if (
    pobi[1] > 1 &&
    pobi[0] < 400 &&
    pobi[0] + 1 === pobi[1] &&
    pobi[1] % 2 === 0 &&
    crong[1] > 1 &&
    crong[0] < 400 &&
    crong[0] + 1 === crong[1] &&
    crong[1] % 2 == 0
  ) {
    let pobiMax = 0;
    let crongMax = 0;
    for (index = 0; index < 2; index++) {
      let pobiNum = pobi[index];
      let crongNum = crong[index];
      let pobiPlus = 0;
      let crongPlus = 0;
      let pobiMult = 1;
      let crongMult = 1;

      for (i = 100; i >= 1; i /= 10) {
        if (pobiNum >= i && pobiNum / i > 0) {
          pobiPlus += parseInt(pobiNum / i);
          pobiMult *= parseInt(pobiNum / i);
          pobiNum %= i;
        }
        if (crongNum >= i && crongNum / i > 0) {
          crongPlus += parseInt(crongNum / i);
          crongMult *= parseInt(crongNum / i);
          crongNum %= i;
        }
      }

      if (pobiPlus >= pobiMult && pobiPlus > pobiMax) {
        pobiMax = pobiPlus;
      } else if (pobiMult >= pobiPlus && pobiMult > pobiMax) {
        pobiMax = pobiMult;
      }

      if (crongPlus >= crongMult && crongPlus > crongMax) {
        crongMax = crongPlus;
      } else if (crongMult >= crongPlus && crongMult > crongMax) {
        crongMax = crongMult;
      }
    }

    if (pobiMax > crongMax) {
      answer = 1;
    } else if (pobiMax < crongMax) {
      answer = 2;
    } else if (pobiMax === crongMax) {
      answer = 0;
    }
  }

  return answer;
}

module.exports = problem1;
