//예외사항(페이지 숫자가 연속된 숫자인지 확인, 1-400페이지에 해당하지 않는 숫자)
function checkPage(page){
  if(page[1]-page[0] > 1 || page[0] < 1 || page[1] > 400){
    return 1;
  }
  else return 0;

}
function problem1(pobi, crong) {
  //var answer;
  //예외사항 체크
  let checkPobi = checkPage(pobi);
  let checkCrong = checkPage(crong);
  if(checkPobi == 1 || checkCrong == 1){
    return -1;
  }
  else{
    //예외사항 통과했을 경우
  }
  
  //return answer;
}

module.exports = problem1;
