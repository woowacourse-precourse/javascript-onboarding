// 기능1
function numToCharArr(num) {
  const numToChar = String(num);
  const charArr = Array.from(numToChar);

  return charArr;
}

// 기능 2
function checkNum(charArr) {
  const chkNum = ["3", "6", "9"];
  let cnt = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (chkNum.includes(charArr[i])) cnt++;
  }
  return cnt;
}

function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let arr = numToCharArr(i);
    answer += checkNum(arr);
  }
  return answer;
}

module.exports = problem3;

/*
1. 각 자리수를 문자로 나눠 배열에 저장하는 기능
2. 배열을 ['3','6','9']에 해당하는지 체크하는 기능
*/
