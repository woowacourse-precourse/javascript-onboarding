// 기능 목록
// 1. 3, 6, 9가 들어가는 숫자는 손뼉 치기

function problem3(number) {
  // 손벽 치는 횟수
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let arr = String(i).split("");

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "3" || arr[j] === "6" || arr[j] === "9") answer++;
    }
  }

  return answer;
}

module.exports = problem3;
