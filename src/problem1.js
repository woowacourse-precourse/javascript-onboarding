function score(target) {
  let result;

  if (target[0] % 2 == 0 || target[1] % 2 == 1) {
    // 왼쪽 페이지가 짝수이거나 오른쪽 페이지가 홀수인 경우
    return -1
  }

  if (target[1] - target[0] != 1) {
    // 페이지 정보가 연속한 숫자가 아니거나, 오른쪽 페이지가 더 작은 경우
    return -1
  }

  if (target[0] == 1 || target[1] == 400) {
    // 시작 면을 펼치거나 마지막 면을 펼친 경우
    return -1
  }

  let leftNum = String(target[0])
  let leftScore;
  let sumOfPage = 0;
  let multiOfPage = 1;
  for (let i = 0; i < leftNum.length; i++) {
    sumOfPage += Number(leftNum[i])
    multiOfPage *= Number(leftNum[i])
  }
  leftScore = sumOfPage > multiOfPage ? sumOfPage : multiOfPage
  
  let rightNum = String(target[1])
  let rightScore;
  sumOfPage = 0;
  multiOfPage = 1;
  for (let i = 0; i < rightNum.length; i++) {
    sumOfPage += Number(rightNum[i])
    multiOfPage *= Number(rightNum[i])
  }
  rightScore = sumOfPage > multiOfPage ? sumOfPage : multiOfPage

  result = leftScore > rightScore ? leftScore : rightScore
  return result
}


function problem1(pobi, crong) {
  let answer;
  let pobiScore = score(pobi)
  let crongScore = score(crong)

  if (pobiScore === -1 || crongScore === -1) {
    return -1
  }

  if (pobiScore > crongScore) {
    answer = 1
  } else if (pobiScore === crongScore) {
    answer = 0
  } else {
    answer = 2
  }

  return answer;
}

module.exports = problem1;
