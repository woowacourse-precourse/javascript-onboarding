function problem2(cryptogram) {
  var answer=[];

  cryptogram.split('').forEach((el)=>{
    if(answer[answer.length-1]===el){
      answer.pop();
    }else{
      answer.push(el);
    }
  });

  return answer;
  //2. answer를 문자열로 변환해 반환한다.
}

module.exports = problem2;
