function problem2(cryptogram) {
  var answer=[];
  for(var i = 0;i<cryptogram.length;i++){
    if(answer.length === 0) {
      answer.push(cryptogram[i]);
    }else{
      if(answer[answer.length-1] != cryptogram[i]) {
        answer.push(cryptogram[i]);
      }else{
        answer.pop();
      }
    }
  }
  return answer.join('');
}

module.exports = problem2;
