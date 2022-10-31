function problem1(pobi, crong) {
  let answer;
  
  isvalidinit(pobi, crong) ? null : answer = "조건을 다시 확인 하세요";

  for (let i = 0; i < 1; i++) {
    let pobiScore, crongScore = 0;
    pobiScore = Math.max(sum(pobi[i]), sum(pobi[i+1]), multiply(pobi[i]), multiply(pobi[i+1]))
    crongScore = Math.max(sum(crong[i]), sum(crong[i+1]), multiply(crong[i]), multiply(crong[i+1]))
    
    if ((pobi[i] + 1 === pobi[i + 1]) && (crong[i] + 1 === crong[i + 1])) {
        if (pobiScore > crongScore) {
        answer = 1
      } else if (pobiScore < crongScore) {
        answer = 2
      } else if (pobiScore == crongScore) {
        answer = 0
      } else {
        answer = -1
      }
    } else {
      answer = -1
    }    
  // 페이지 제한 조건 구현하기 1미만, 400초과 
}


  return answer;
}

module.exports = problem1;

/**
 * 초기 입력값의 상태를 체크하여 오류 또는 진행 판단
 * @param {Array, Array} 책 페이지 값 들어오기 때문에 길이는 2 
 * @returns boolean 값 반환 
 */
function isvalidinit(pobi, crong) {
  if (pobi[0] < 1 && crong[1] > 399) return false

  return true
}

/**
 * 각 자리 숫자를 모두 더하고 곱해서 가장 큰 수를 반환하는 함수
 * @param {Array} 책 페이지 값 들어오기 때문에 길이는 2 
 * @returns 각 자리 숫자의 합과 곱 중 가장 큰 수를 반환
 */
function setScore(arr) {
  let score = 0;
  
  for (let i = 0; i < 1; i++) {
    if(arr[i+1] - arr[i] !== 1) return -1
    score = Math.max(sum(arr[i]), sum(arr[i+1]), multiply(arr[i]), multiply(arr[i+1]))
  }
  return score
}

/**
 * 두 배열을 받아 비교하여 값을 반환
 * @param {Array, Array} 비교값
 * @returns 값을 비교하여 반환
 */
function compare(scoreA, scoreB) {
  if (scoreA === -1 || scoreB === -1) return -1;
  if (scoreA > scoreB) return 1;
  if (scoreA < scoreB) return 2;
  if (scoreA === scoreB) return 2;
}


function sum(n) {
  let sumArr = (n+"").split("").map(x => parseInt(x))
  return sumArr.reduce((acc, cur) => acc + cur, 0)
}

function multiply(n) {
  let multiplyArr = (n+"").split("").map(x => parseInt(x))
  return multiplyArr.reduce((acc, cur) => acc * cur)
}