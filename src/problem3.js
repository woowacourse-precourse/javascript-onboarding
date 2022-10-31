function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    // 각 자리수별로 반복문으로 체크하기 위해 숫자를 문자로 치환
    const sNum = i.toString();
    // 자리수 별로 3, 6, 9가 포함될때 마다 answer를 1씩 증가
    for (let j = 0; j < sNum.length; j++) {
      if (
        sNum[j].includes("3") ||
        sNum[j].includes("6") ||
        sNum[j].includes("9")
      )
        answer++;
    }
  }
  return answer;
}
module.exports = problem3;
