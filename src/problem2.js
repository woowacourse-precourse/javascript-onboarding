function problem2(cryptogram) {
  var answer = cryptogram;

  while(1) {
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
  
    // 2. 중복 문자 있을 경우 idx, cnt 체크
    var idx = 0;
    var cnt = 1;

    for(var j = 0; j < bool.length - 1; j++) {
      if(bool[j] === true) cnt++;
      if(bool[j] === true && bool[j + 1] === false) {
        idx = j + 1;
        break;
      }
    }

    // 3. 중복 문자 제거
    if(!bool.includes(true)) 
      break;
    else 
      bool.length > 2 ? answer = answer.slice(0, idx - cnt + 1) + answer.slice(idx + 1) : answer = '';
  }
  
  return answer;
}

module.exports = problem2;
