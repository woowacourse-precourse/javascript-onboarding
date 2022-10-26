function problem2(cryptogram) {
  if(cryptogram.length<1 || cryptogram.length>1000){  
    return -1;  //예외1
  }
  if(/[^a-z]/g.test(cryptogram)){ 
    return -1;  //예외2
    //cryptogram = cryptogram.toLowerCase();  혹은 소문자로 변경해서 추가하는 기능
  }
  let answer = [];
  let stackSize = -1;
  cryptogram.split("").forEach(el=>{
    if(el===answer[stackSize]){
      answer.pop();
      stackSize-=1;
    }else{
      answer.push(el);
      stackSize+=1;
    }
  })
  return answer.join("");
}
/* 스택 이용 
  예외1) cryptogram의 길이가 1 미만 1000 초과인 문자열
  예외2) 알파벳 소문자로만 이루어져 있지 않은 경우
*/
module.exports = problem2;
