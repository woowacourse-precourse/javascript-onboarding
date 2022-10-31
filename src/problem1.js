function problem1(pobi, crong) {
  // pobi와 crong의 왼쪽과 오른쪽 페이지
  const [leftPobi, rightPobi] = pobi;
  const [leftCrong, rightCrong] = crong;
  // Page의 왼쪽과 오른쪽이 한 장 차이인지 비교
  function exception(leftPage, rightPage) {
    if (parseInt(rightPage) !== parseInt(leftPage) + 1) {
      return -1;
    }
  }
  // 만약 한 장 차이가 아니면 예외처리
  if (exception(leftPobi, rightPobi) || exception(leftCrong, rightCrong) === -1)
    return -1;

  // 페이지의 합
  function isPlusValue(value) {
    return value
      .toString()
      .split("")
      .reduce((prevNum, currNum) => parseInt(prevNum) + parseInt(currNum));
  }

  //페이지의 곱
  function isMultValue(value) {
    return value
      .toString()
      .split("")
      .reduce((prevNum, currNum) => parseInt(prevNum) * parseInt(currNum));
  }

  // 왼쪽과 오른쪽 페이지 비교
  function compare(left, right) {
    if (left < right) {
      return right;
    } else {
      return left;
    }
  }

  // 합과 곱 중 더 큰 수 비교
  const pobiPlusMaxNum = compare(isPlusValue(leftPobi), isPlusValue(rightPobi));
  const pobiMultMaxNum = compare(isMultValue(leftPobi), isMultValue(rightPobi));
  const crongPlusMaxNum = compare(
    isPlusValue(leftCrong),
    isPlusValue(rightCrong)
  );
  const crongMultMaxNum = compare(
    isMultValue(leftCrong),
    isMultValue(rightCrong)
  );

  const pobiMaxNum = compare(pobiPlusMaxNum, pobiMultMaxNum);
  const crongMaxNum = compare(crongPlusMaxNum, crongMultMaxNum);

  if (pobiMaxNum > crongMaxNum) return 1;
  else if (pobiMaxNum < crongMaxNum) return 2;
  else return 0;
}

module.exports = problem1;
