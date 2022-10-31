//덧셈과 뺄셈 최대 점수 찾기 함수
const findMaxScore = (num, max) => {
  let multipleScore;
  const plusScore = Math.floor(num / 100) + Math.floor((num % 100) / 10) + (num % 10);
  //100의 자릿수 유무 구별
  if (Math.floor(num / 100) === 0) {
    multipleScore = Math.floor(num / 10) * (num % 10);
  } else {
    multipleScore = Math.floor(num / 100) * Math.floor((num % 100) / 10) * (num % 10);
  }
  max = Math.max(max, plusScore, multipleScore)
  return max
}

//왼쪽과 오른쪽 페이지 차이가 1인지 판별하는 함수
const compareNextPage = (user) => {
  return user[1] - user[0] === 1;
}

function problem1(pobi, crong) {
  let pobiMax = 0;
  let crongMax = 0;
  let answer;
  if (compareNextPage(pobi) === false || compareNextPage(crong) === false) {
    return -1;
  }
  //pobi의 최대 점수 구하기
  pobi.forEach((num) => {
    if (num < 1 || num > 400 ) {
      return -1;
    }
    pobiMax = findMaxScore(num, pobiMax)
  })

  //crong의 최대 점수 구하기
  crong.forEach((num) => {
    if (num < 1 || num > 400) {
      return -1;
    }
    crongMax = findMaxScore(num, crongMax)
  })

  //pobi와 crong 점수 비교
  if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else if (pobiMax === crongMax) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
