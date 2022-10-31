function problem3(number) {
  //입력: 숫자
  //출력: 숫자 / 369게임이 num 까지 진행됐을 때 박수친 숫자
  //해야할 일: num까지의 숫자중 3,6,9 들어가는 횟수 세기(단, 33, 336 처럼 중복 포함)
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let num = String(i).split("");
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "3" || num[j] === "6" || num[j] === "9") {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
