function problem1(pobi, crong) {
  var answer;
  // 1. 책을 임의로 펼친다.
  // => 펼쳐진 페이지가 맞는지 확인한다.
  // 맞지 않으면 예외사항으로 -1처리
  // 두 페이지의 차이가 1이 아니고 왼쪽은 홀수여야 한다.
  if(pobi[1]-pobi[0]!==1 || pobi[0]%2==0){return -1}
  if(crong[1]-crong[0]!==1 || crong[0]%2==0){return -1}

  // 시작면과 마지막 면이 나올수 없다.
  if(pobi[0]==1 || pobi[1]==400 || crong[0]==1 || crong[1]==400) {return -1}





  return answer;
}

module.exports = problem1;
