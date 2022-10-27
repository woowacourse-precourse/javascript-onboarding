// 기능 요구 사항

// - [x] 1부터 주어진 number까지 손뼉을 몇 번 쳐야 하는지 횟수 return

function problem3(number) {
  let answer;
  let count = 0;
  let j = 0;

  for (let i = 1; i <= number; i++) {
    j = i;
    while (j > 0) {
      if (j % 10 == 3 || j % 10 == 6 || j % 10 == 9) count++;
      j = Math.floor((j /= 10));
    }
  }
  answer = count;
  return answer;
}

module.exports = problem3;
