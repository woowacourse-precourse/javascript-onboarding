function problem1(pobi, crong) {
  if (!isvalidPage) return -1;
  var answer;
  return answer;
}

const getBiggestNumber = ({ leftPage, rigthPage }) => {
  let biggerPage = rigthPage;
  let sumPage = 0,
    mulPage = 1;

  if (rigthPage % 10 === 0) biggerPage = leftPage;

  while (biggerPage > 0) {
    let n = biggerPage % 10;
    sumPage += n;
    mulPage *= n;
    biggerPage /= 10;
  }

  return sumPage < mulPage ? mulPage : sumPage;
};

const compareNumber = (numer1, number2) => {};

const isvalidPage = ({ leftPage, rigthPage }) => {
  if (leftPage + 1 !== rigthPage || leftPage < 1 || rigthPage > 400)
    return false;
  return true;
};

module.exports = problem1;

/*
  1. 왼쪽 페이지의 가장 큰 수를 구한다.
  2. 오른쪽 페이지의 가장 큰  수를 구한다.
  3. 왼쪽과 오른쪽을 비교해서 큰 수를 정한다.
  4. 두 사람의 점수를 비교한 결과를 return 한다.
*/
