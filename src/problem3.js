function problem3(number) {
  let numString = "";
  let i;

  //방법 1. DP로 푼다 (백준 10802)
  //방법 2. 브루트포스로 푼다 -> 선택. 어차피 시간제한 없음

  for (i = 1; i <= number; i++) {
    numString += i.toString();
  }

  const threeNums = numString.split("3").length - 1;
  const sixNums = numString.split("6").length - 1;
  const nineNums = numString.split("9").length - 1;

  const answer = threeNums + sixNums + nineNums;

  return answer;
}

module.exports = problem3;
