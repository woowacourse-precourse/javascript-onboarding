function problem3(number) {
  let clapCnt = 0;

  let flag = 1;
  while (flag <= number) {
    clapCnt += getCurrentCnt(flag);
    flag += 1;
  }

  return clapCnt;
}

const getCurrentCnt = number => {
  const numberList = number.toString().split('');

  return numberList.reduce((cnt, curr) => {
    if (['3', '6', '9'].includes(curr)) cnt += 1;
    return cnt;
  }, 0);
};

module.exports = problem3;
