function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getClapCount(i);
  }

  return answer;
}

function getClapCount(number) {
  let numberSplitArray = String(number).split("");
  let clapCount = 0;
  for (let i = 0; i < numberSplitArray.length; i++) {
    if (["3", "6", "9"].includes(numberSplitArray[i])) clapCount += 1;
  }
  return clapCount;
}

module.exports = problem3;

// 입력값: 숫자

// 구현할 기능
// 숫자를 입력받아 해당 숫자에서 쳐야할 박수의 횟수를 리턴하는 함수

// 구현 방향성
// 1부터 입력된 숫자까지 반복하는 반복문을 작성한다.
// 반복문의 각 반복마다 쳐야할 박수의 숫자를 계산하여 answer에 더해준다.
