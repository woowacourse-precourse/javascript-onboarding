// 1. 배열의 arr[0] 이 홀수, arr[1]이 arr[0]+1 인지 확인 -> 틀리면 바로 -1 return 
function check(pageNumber) {
  let [left, right] = pageNumber;
  
  if(1 <= left && left < 400 && left+1 === right) return true; 
  else return false;
}

// 2. arr[0] 자리 더하고 곱하고 큰 수 저장
// 3. arr[0] 자리 더하고 곱하고 큰 수 저장
// 4. arr[0] 2.3.의 수 비교 후 큰 수 저장
// 5. 234를 arr[0] arr[1] 왼쪽 오른쪽 시행하고 큰 수 저장.
function findMax(pageNumber) {
  const [left, right] = pageNumber;

  // 숫자인 경우 split을 사용할 수 없으므로 (""+숫자변수)로 문자를 만들어 준 후 split을 해줌.
  const leftArr = ("" + left).split("").map((v) => parseInt(v));
  const rightArr = ("" + right).split("").map((v) => parseInt(v));

  // 초깃값 설정을 0으로 한다면 *를 진행할 때 0으로 계산이 된다.
  return Math.max(
    leftArr.reduce((acc, cur) => (acc + cur)),
    leftArr.reduce((acc, cur) => (acc * cur)),
    rightArr.reduce((acc, cur) => (acc + cur)),
    rightArr.reduce((acc, cur) => (acc * cur))
  );
}

function problem1(pobi, crong) {
  // 예외 먼저 확인
  if (!check(pobi) || !check(crong)) return -1;

  const pobiMax = findMax(pobi);
  const crongMax = findMax(crong);
  let answer = 0;
  // 6. pobi와 crong 두 개 다 해주고 pobi가 크면 1, crong이 크면 2, 무승부 0
  if (pobiMax == crongMax) answer = 0;
  else if (pobiMax > crongMax) answer = 1;
  else answer = 2;

  return answer;
}

// npm test -- -t "problem1" 나머지는 skip 하나만 test 할 경우의 코드
// test 1 에서 error 0이 나와야 하는데 2가 나옴. -> function findMax return 값에서 오류 발견.

module.exports = problem1;