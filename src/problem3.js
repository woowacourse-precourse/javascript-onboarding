function problem3(number) {
  let clapCnt = 0;

  let flag = 1;
  while (flag <= number) {
    clapCnt += getCurrentCnt(flag);
    flag += 1;
  }

  return clapCnt;
}

function getCurrentCnt(number) {
  const numberList = number.toString().split('');

  return numberList.reduce((sum, curr) => {
    if (['3', '6', '9'].includes(curr)) sum += 1;
    return sum;
  }, 0);
}

module.exports = problem3;
