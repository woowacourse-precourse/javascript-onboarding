/*
*요구사항
1 ~ 400 페이지
왼쪽은 홀수, 오른쪽은 짝수
한 사람당 왼쪽, 오른쪽 페이지가 각각 주어짐.
다음 규칙의 게임을 이긴 사람이 책을 갖는다.

1. 각 페이지 번호의 각 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구함.
2. 각 사람은 두 페이지의 점수 중, 가장 큰 점수를 자신의 점수라 하고 비교한다.
3. 첫번째, 마지막 페이지는 펼치지 않음. 즉, 1, 400 페이지는 입력 되지 않는다.
4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 로 return

*예외사항 
ex) 
1. 왼쪽 오른쪽 페이지 번호가 같은 경우.
2. 왼쪽 페이지 번호가 오른쪽 페이지 번호보다 높은 경우.
3. 두 번호의 차이가 1을 넘어가는 경우.

=> 왼쪽페이지에서 오른쪽페이지를 뺏을 때 -1이 나오지 않는 경우들은 모두 에외상황이다.

*입력
포비와 크롱의 왼쪽페이지, 오른쪽페이지가 길이 2 배열로 각각, 주어진다.
0번 인덱스: 왼쪽 페이지, 1번 인덱스 오른쪽 페이지

*기능
1. 페이지 번호의 각 숫자들을 더한 값을 return 할 함수.
2. 페이지 번호의 각 숫자들을 곱한 값을 return 할 함수.
3. 예외사항을 체크해줄 함수.

*/

function problem1(pobi, crong) {
  function pageNumEachPlus(num) {
    let numList = String(num).split("").map(Number);
    let plusResult = numList.reduce((pre, cur) => pre + cur);
    return plusResult;
  }

  function pageNumEachMultiply(num) {
    let numList = String(num).split("").map(Number);
    let multiplyResult = numList.reduce((pre, cur) => pre * cur);
    return multiplyResult;
  }

  function except(pageNums) {
    let pageDiff = pageNums[0] - pageNums[1];
    return pageDiff === -1 ? false : true;
  }

  if (except(pobi)) return -1;
  if (except(crong)) return -1;

  let [pobiScore, crongScore] = [0, 0];
  let result = 0;

  pobi.map((pageNum) => {
    pobiScore = Math.max(pobiScore, pageNumEachPlus(pageNum));
    pobiScore = Math.max(pobiScore, pageNumEachMultiply(pageNum));
  });

  crong.map((pageNum) => {
    crongScore = Math.max(crongScore, pageNumEachPlus(pageNum));
    crongScore = Math.max(crongScore, pageNumEachMultiply(pageNum));
  });

  result = pobiScore > crongScore ? 1 : pobiScore < crongScore ? 2 : 0;

  return result;
}

module.exports = problem1;
