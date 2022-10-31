// 예외 처리 기능
function isExcept(page) {
  if (page.length != 2)
    return true

  let left = page[0];
  let right = page[1];
  if (left % 2 != 1 || left <= 1 || left >= 400)
    return true
  if (right % 2 != 0 || right <= 1 || right >= 400)
    return true
  if (right - left != 1)
    return true
  return false
}

// 페이지 번호 각 자리 숫자를 모두 더해 반환하는 기능
function getSum(n) {
  let sum = 0;
  let number = n.toString();
  [...number].forEach(i => sum += parseInt(i));
  return sum;
}

// 페이지 번호 각 자리 숫자를 모두 곱해 반환하는 기능
function getMulti(n) {
  let multi = 1;
  let number = n.toString();
  [...number].forEach(i => multi *= parseInt(i));
  return multi;
}

// 각 페이지별로 각 자리 숫자를 모두 더하거나 곱해서 나온 수들 중 최댓값을 반환하는 기능
function getScore(page) {
  return Math.max(getSum(page[0]), getMulti(page[0]), getSum(page[1]), getMulti(page[1]));
}

function problem1(pobi, crong) {
  var answer;

  // 예외 처리
  if ((isExcept(pobi) || isExcept(crong)))
    answer = -1;
  else {
    let pobiScroe = getScore(pobi);
    let crongScroe = getScore(crong);
  
    // pobi와 crong의 점수를 비교해 답 구하기
    if (pobiScroe > crongScroe)
      answer = 1;
    else if (pobiScroe < crongScroe)
      answer = 2;
    else if (pobiScroe == crongScroe)
      answer = 0;
    else
      answer = -1;
  }

  return answer;
}

module.exports = problem1;
