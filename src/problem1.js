function problem1(pobi, crong) {
  let answer;
  if (isValid(pobi) && isValid(crong)) {
  } else {
    answer = -1;
  }
  return answer;
}

/*
배열값이 유효한지 확인하는 함수
1. 왼쪽 페이지 번호가 홀수인지
2. 오른쪽 페이지 번호가 짝수인지
3. 왼쪽, 오른쪽 페이지 번호 차이가 1인지
*/
function isValid(bookArray) {
  if (
    bookArray[0] % 2 === 1 &&
    bookArray[1] % 2 === 0 &&
    bookArray[1] - bookArray[0] === 1
  )
    return true;
  else return false;
}
module.exports = problem1;
