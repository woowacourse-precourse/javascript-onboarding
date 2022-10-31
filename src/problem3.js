const getCrapCount = (curNum) => {
  return [...curNum.toString()].reduce((acc, cur) => {
    if (['3', '6', '9'].includes(cur)) {
      acc++;
    }

    return acc;
  }, 0);
};

const getTotalCount = (num) => {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    cnt += getCrapCount(i);
  }

  return cnt;
};

function problem3(number) {
  const totalCrapCount = getTotalCount(number);
  return totalCrapCount;
}

module.exports = problem3;
