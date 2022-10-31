function problem2(cryptogram) {
  var answer=[];
  for(var i = 0;i<str.length;i++){
    if(answer.length === 0) {
      answer.push(str[i]);
    }else{
      if(answer[answer.length-1] != str[i]) {
        answer.push(str[i]);
      }else{
        answer.pop();
      }
    }
  }
  return answer;
}

module.exports = problem2;
