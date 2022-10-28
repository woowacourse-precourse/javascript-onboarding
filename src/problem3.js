// 기능 요구 사항
// - 369게임! 1부터 숫자를 하나씩 대면서 3,6,9가 들어가는 숫자를 말하는 대신
// - 3,6,9개의 개수만큼 손뼉을 쳐야 한다.
// - [o] 1부터 number까지 손벽을 몇 번 쳐야 하는지 count를 return 한다.
//   - [o] 1부터 number까지 숫자를 문자열로 바꿔준다.
//   - [o] 자릿수만큼 2중 반복문을 돌며, 각 자리의 숫자에 3,6,9가 포함되어 있으면 count를 증가시킨다.
// - ex) 13 -> 4  (3, 6, 9, 13)
// - ex) 33 -> 14 (3, 6, 9, 13, 16, 19, 23, 26, 29, 30, 31, 32, 33, 33)

function problem3(number) {
  let count = 0;
  let arr = '';

  for(let i = 1; i <= number; i++) {
    arr = i.toString();
    for(let j = 0; j < arr.length; j++) {
      if (arr[j].includes("3") || arr[j].includes("6") || arr[j].includes("9")) {
        count++;
      }
    }
  }
  return count;
}

console.log(problem3(33));
module.exports = problem3;
