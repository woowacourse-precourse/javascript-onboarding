function problem1(pobi, crong) {
  var answer;
  // 1. 책을 임의로 펼친다.
  // => 펼쳐진 페이지가 맞는지 확인한다.
  if(checkPage(pobi) && checkPage(crong))return -1




  return answer;
}

function checkPage(pages){
  // 맞지 않으면 예외사항으로 -1처리
  // 두 페이지의 차이가 1이 아니고 왼쪽은 홀수여야 한다.
  // 시작면과 마지막 면이 나올수 없다.
  // 둘중 하나라도 false이면 예외사항 이므로 && 사용.
  if (pages[1]-pages[0] !== 1 || pobi[0]%2==0 
    || pages[0]==1 || pages[1]==400){
      return false
  }
  return true
}

module.exports = problem1;
