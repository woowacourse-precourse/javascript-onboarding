function problem1(pobi, crong) {
  if (!isvalidPage) return -1;
  var answer;
  return answer;
}

const isvalidPage = ({ leftPage, rigthPage }) => {
  if (leftPage + 1 !== rigthPage) return false;
  return true;
};

module.exports = problem1;

/*
  1. 왼쪽 페이지의 가장 큰 수를 구한다.
  2. 오른쪽 페이지의 가장 큰  수를 구한다.
  3. 왼쪽과 오른쪽을 비교해서 큰 수를 정한다.
  4. 두 사람의 점수를 비교한 결과를 return 한다.
*/
