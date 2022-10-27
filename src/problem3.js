function getCount(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    const curNum = i + '';
    for (let j = 0; j < curNum.length; j++) {
      if (curNum[j] === '3' || curNum[j] === '6' || curNum[j] === '9') {
        cnt++;
      }
    }
  }
  return cnt;
}

function problem3(number) {
  const answer = getCount(number);
  return answer;
}

module.exports = problem3;
