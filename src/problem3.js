// 기능 목록
// 1. number를 하나씩 잘라서 배열에 담기
// 2. 배열 안에 3 또는 6 또는 9가 들어있는 경우 answer 증가

function problem3(number) {
  // 손벽 치는 횟수
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    // number를 하나씩 잘라서 배열에 담기
    let arr = String(i).split("");

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "3" || arr[j] === "6" || arr[j] === "9") answer++;
    }
  }

  return answer;
}

module.exports = problem3;
