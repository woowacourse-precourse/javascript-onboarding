
// < 기능 목록 >
// 1. 책을 임의로 펼친 페이지 값을 받는다.
//    [예외처리] element 중 0보다 작거나 같은 값이 있다.
//    [예외처리] 첫번째 element가 짝수이다.
//    [예외처리] 첫번째 element와 두번째 element의 차가 1이 아니다.
// 2. 포비와 크롱의 점수를 결정한다.
// 2. 포비와 크롱의 점수를 비교해서 return 한다.

function problem1(pobi, crong) {
  var answer;  
  if (!(vaildate(pobi) && vaildate(crong))) answer = -1;

  return answer;
}

function vaildate(pages) {
  if(pages[0] < 0 || pages[1] < 0) return false;
  if(pages[0] % 2 == 0) return false;
  if(pages[1] - pages[0] != 1) return false;
  return true;
}

module.exports = problem1;
