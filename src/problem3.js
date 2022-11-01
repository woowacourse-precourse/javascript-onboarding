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

function isRightNumber(number) {
  if (!(number > 0 && number < 10001)) {
    return 0;
  } else if (!(typeof number == "number")) {
    return 0;
  }
  return 1;
}
function problem3(number) {
  const numArr = [];
  let answer = 0;

  if (isRightNumber(number) == 0) {
    return false;
  }
  for (let i = 1; i <= number; i++) {
    numArr.push(i);
  }
  for (i = 0; i <= numArr[i]; i++) {
    answer += splitArr(numArr[i]);
  }
  return answer;
}

module.exports = problem3;
