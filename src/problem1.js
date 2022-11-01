// 배열의 arr[0] 이 홀수, arr[1]이 arr[0]+1 인지 확인 -> 틀리면 바로 -1 return 
function check(pageNumber) {
  let [left, right] = pageNumber;
  
  if(1 <= left && left < 400 && left+1 === right) return true; 
  else return false;
}

// 가장 큰 수를 찾는 함수
function findMax(pageNumber) {
  const [left, right] = pageNumber;

  // 숫자인 경우 split을 사용할 수 없으므로 (""+숫자변수)로 문자를 만들어 준 후 split을 해줌.
  const leftArr = ("" + left).split("").map((v) => parseInt(v));
  const rightArr = ("" + right).split("").map((v) => parseInt(v));

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

  // pobi와 crong 두 개 다 해주고 pobi가 크면 1, crong이 크면 2, 무승부 0
  if (pobiMax == crongMax) answer = 0;
  else if (pobiMax > crongMax) answer = 1;
  else answer = 2;

  return answer;
}

// npm test -- -t "problem1" 나머지는 skip 하나만 test 할 경우의 코드

module.exports = problem1;