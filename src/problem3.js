const isClap = (number) => {
  if(number%3 === 0 && number !== 0) return 1;
  return 0;
}

const cntClap = (cnt, element) => {
  cnt += isClap(element);
  return cnt;
}

const countClaps = (numArr) => {
  const cntOfClaps = numArr.reduce(cntClap, 0)
  return cntOfClaps;
}

const strToNum = (str) => {
  return Number(str);
}

const makeNumToArr = (number) => {
  const numArr = number.toString().split('').map(strToNum);
  return numArr;
}

function problem3(number) {
  let answer = 0;
  for(let i=1; i<=number; i++){
    const numArr = makeNumToArr(i);
    answer += countClaps(numArr)
  }
  return answer;
}

module.exports = problem3;