function problem2(cryptogram) {
  var answer = cryptogram;

    // 1. 중복 문자 체크
    var temp = answer[0]; 
    var bool = [];
    
    for(var i = 1; i < answer.length; i++) {
      if(temp === answer[i]) {
        bool.push(true);
      } else {
        bool.push(false);
        temp = answer[i];
      }
    }

  return answer;
}

module.exports = problem2;
