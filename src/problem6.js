const compareNickName = (nickName) => {
  // String 메소드인 substring을 사용하여 값을 비교할 수 있음.
  // nickName[idx].substring(left, right);
  var left = 0;
  var right = 2;

  var tLeft = 0;
  var tRight = 2;
  var value = "";
  var idx = 0;
  var tIdx = 1;
  var check = 0;
  
  var outCheck = 0;
  var reAns = [];
  
  while (idx < nickName.length){
    value = nickName[idx].substring(left, right);
  
    while (tIdx < nickName.length){
      while(tRight <= nickName[tIdx].length){
        if (value === nickName[tIdx].substring(tLeft, tRight)){
          reAns.push(nickName.splice(tIdx, 1));
          check = 1;
          outCheck = 1;
          break;
        }
        else{
          tLeft += 1;
          tRight += 1;
        }
      }
      
      if (check){
        tIdx -= 1;
        check = 0;
      } 
      tIdx += 1;
      tLeft = 0 ;
      tRight = 2;
    }
    
    if (check){
      nickName.splice(idx, 1);
      check = 0;
    }

    left += 1;
    right += 1;

    if (right > nickName[idx].length || outCheck == 1){
      if (outCheck){
        reAns.push(nickName.splice(idx, 1));
        idx -= 1;
        outCheck = 0;
      }
      idx += 1;
      left = 0;
      right = 2;
    }

  }
  return reAns;
}

function problem6(forms) {
  var answer = [];
  var nickName = [];
  var myObj = new Object();
  var tmpAnswer = [];


  // 닉네임만 따로 뽑아냅니다.
  forms.forEach(element => {
    nickName.push(element[1]);
    myObj[`${element[1]}`] = element[0];
  });

  tmpAnswer = compareNickName(nickName);

  return answer;
}

module.exports = problem6;
