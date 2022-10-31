
// < 기능 목록 >
// 1. 책을 임의로 펼친 페이지 값을 받는다.
//    [예외처리] element 중 0보다 작거나 같은 값이 있다.
//    [예외처리] 첫번째 element가 짝수이다.
//    [예외처리] 첫번째 element와 두번째 element의 차가 1이 아니다.
// 2. 포비와 크롱의 점수를 결정한다.
// 3. 포비와 크롱의 점수를 비교해서 return 한다.

function problem1(pobi, crong) {
  var answer;  
  if (!(vaildate(pobi) && vaildate(crong))) answer = -1;
  else {
    var pobi_score = get_score(pobi);
    var crong_score = get_score(crong);

    if(pobi_score > crong_score) answer = 1;
    else if(pobi_score < crong_score) answer = 2;
    else answer = 0;
  }
  
  return answer;
}

function vaildate(pages) {
  if(pages[0] < 0 || pages[1] < 0) return false;
  if(pages[0] % 2 == 0) return false;
  if(pages[1] - pages[0] != 1) return false;
  return true;
}

function get_score(pages) {
  var s0 = Math.max(get_addScore(pages[0]), get_multiScore(pages[0]));
  var s1 = Math.max(get_addScore(pages[1]), get_multiScore(pages[1]));
  return Math.max(s0, s1);
}
function get_addScore(num) {
  var result = 0;
  while(num > 0) {
    result += num % 10;
    num = Math.floor(num/10); // 소수점 버림
  }
  return result;
}
function get_multiScore(num) {
  var result = 1;
  while(num > 0) {
    result *= num % 10;
    num = Math.floor(num/10); // 소수점 버림
  }
  return result;
}

module.exports = problem1;
