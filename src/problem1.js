
function problem1(pobi, crong) {
  var answer = -1;
  //예외사항 if문으로 제외하기
  if(pobi[1]-pobi[0] == 1 && crong[1]-crong[0] == 1){
    return answer;
  }else if((pobi[1] <= 2 && pobi[0] >= 399)&&(crong[1] <= 2 && crong[0] >= 399)){
    return answer;
  }else if(pobi.length != 2 && crong.length != 2){
    return answer;
  }
  ㅁㅁㅁ
}

module.exports = problem1;
