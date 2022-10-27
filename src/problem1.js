function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

/**
 *
 * pobi, crong 공통 edge case => return -1
 *  1 < !(페이지 번호) < 400
 *  왼쪽 페이지 번호 + 1 !== 오른쪽 페이지 번호
 *  왼쪽 페이지 % 2 !== 1 || 오른쪽 페이지 % 2 !== 0
 *
 * 점수 구하기
 *  for each pobi & crong
 *    iterate arr[0]
 *      for each el => resultOfPlus += el
 *      for each el => resultOfMultiple *= el
 *      resultOfArr0 = Math.max(resultOfPlus, resultOfMultiple)
 *
 *    iterate arr[1]
 *      for each el => resultOfPlus += el
 *      for each el => resultOfMultiple *= el
 *      resultOfArr1 = Math.max(resultOfPlus, resultOfMultiple)
 *
 *  pobi > crong => return 1
 *  pobi < crong => return 2
 *  pobi === crong => return 0
 *
 */
