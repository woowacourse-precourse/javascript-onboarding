function problem1(pobi, crong) {
  var answer = -1;
  pobi.forEach((item)=>{
    if(item == 1 || item == 400) {return answer}
  })
  crong.forEach((item)=> {
    if(item == 1 || item == 400) {return answer}
  })
  if((pobi[1]-pobi[0])!==1) {return answer}
  if((crong[1]-crong[0])!==1) {return answer}
  //예외 처리
  

  return answer;
}
module.exports = problem1;
