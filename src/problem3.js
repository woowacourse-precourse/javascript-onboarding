// 예외처리
// 0. [x] number <= 2 -> return answer

// 메인 로직
// 1. [x] 1에서 number까지 순회
// 2. [x] 3,6,9 를 포함하면 answer + 1

// 369 판별 로직
// 2.1 [x] String(number) 문자열로 바꾸기
// 2.2 [x] 문자열을 쪼개서 문자열을 순회하며 3,6,9의 개수를 count

// 2. 369 판별 로직 함수
const check369 = (number) => {
  let count = 0;
  const numMap = {
    '3': 3,
    '6': 6,
    '9': 9
  }
  // 2.1 문자열 형태로 바꾸기
  number = String(number);
  
  // 2.2 문자열 하나하나를 검사하면서 3.6.9가 있으면 count++
  for (let i=0; i<number.length; i++) {
    if (numMap.has(number[i])) count++;
  }

  return count;
}

function problem3(number) {
  // 0. 예외처리
  if (number <= 2) return 0;

  let answer = 0;
  // 1. 메인 - 0~number까지 순회
  for (let curr=3; curr <= number; curr++) {
    // 각 숫자마다 3,6,9가 들어있는 만큼 answer++
    answer += check369(curr);
  }

  return answer;
}

module.exports = problem3;
