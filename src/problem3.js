function findThree(c) {
  let count = 0;
  if (c == 3 || c == 6 || c == 9) {
    return 1;
  }
  return 0;
}

function splitArr(num) {
  let count = 0;
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    count += findThree(numStr[i]);
  }
  return count;
}

function problem3(number) {
  const numArr = [];
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    numArr.push(i);
  }
  for (i = 0; i <= numArr[i]; i++) {
    answer += splitArr(numArr[i]);
  }
  return answer;
}

module.exports = problem3;
