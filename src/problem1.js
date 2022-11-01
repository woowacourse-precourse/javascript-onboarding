function problem1(pobi, crong) {
  // pobi와 crong이 배열이 아닌 경우
  if (!Array.isArray(pobi) || !Array.isArray(crong)) {
    return -1;
  }

  // 왼쪽 페이지가 홀수, 오른쪽 페이지가 짝수가 아닌 경우
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  ) {
    return -1;
  }

  // 왼쪽 페이지와 오른쪽 페이지의 차이가 1이 아닌 경우
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    return -1;
  }

  // 페이지 번호가 1보다 작거나 400보다 큰 경우
  if (pobi[0] < 1 || pobi[0] > 400 || crong[0] < 1 || crong[0] > 400) {
    return -1;
  }

  const maxNum = (pageArr) => {
    const resultArr = [];

    for (let i = 0; i < pageArr.length; i++) {
      const sum = pageArr[i]
        .toString()
        .split('')
        .reduce((prev, curr) => prev + parseInt(curr), 0);
      const multiply = pageArr[i]
        .toString()
        .split('')
        .reduce((prev, curr) => prev * parseInt(curr), 1);

      resultArr.push(sum);
      resultArr.push(multiply);
    }

    return Math.max(...resultArr);
  };

  // pobi와 crong이 무승부인 경우
  if (maxNum(pobi) === maxNum(crong)) {
    return 0;
  }

  // pobi가 이긴 경우
  if (maxNum(pobi) > maxNum(crong)) {
    return 1;
  }

  // crong이 이긴 경우
  if (maxNum(pobi) < maxNum(crong)) {
    return 2;
  }

  // 예외사항일 경우
  return -1;
}

module.exports = problem1;
