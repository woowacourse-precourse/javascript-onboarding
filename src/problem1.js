function problem1(pobi, crong) {
  if (!Array.isArray(pobi) || !Array.isArray(crong)) {
    return -1;
  }

  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  ) {
    return -1;
  }

  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
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

  if (maxNum(pobi) === maxNum(crong)) {
    return 0;
  }

  if (maxNum(pobi) > maxNum(crong)) {
    return 1;
  }

  if (maxNum(pobi) < maxNum(crong)) {
    return 2;
  }

  return -1;
}

module.exports = problem1;
