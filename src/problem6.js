function problem6(forms) {
  var answer;
  answer = [];

  for(var i = 0 ; i < forms.length ; i++){
    // 한명씩 꺼내서 이메일 형식, 닉네임 valid 체크 후 forms 인덱스를 키로 newForms에 add
    var email = forms[i][0];
    var nickname = forms[i][1];

    if(!chkEmail(email) || !chkNick(nickname)){
      forms.splice(i, 1);
      i--;
    }
  }

  for(var i = 0 ; i < forms.length-1 ; i++){
    var nick = forms[i][1];
    var nickArr = twolettersArr(nick);

    var email = forms[i][0];

    for(var j = i+1 ; j < forms.length ; j++){
      var nick2 = forms[j][1];
      var nick2Arr = twolettersArr(nick2);
      var email2 = forms[j][0];
      
      try {
        nickArr.forEach((v,idx) =>{
          if(nick2Arr.includes(v)){
            answer.push(email);
            answer.push(email2);
            throw new Error("stop loop");
          }
        })
      } catch (error) {
        
      }
    }
  }

  answer = new Set(answer);
  answer = Array.from(answer);
  answer = arrAsc(answer);
  
  return answer;
}

// 두글자씩 잘라서 배열 만들기 
function twolettersArr(str){
  var twolettersArr = [];
  for(var i = 0 ; i < str.length -1 ; i++){
    var twoLetter = str.substr(i, 2);
    twolettersArr.push(twoLetter);
  }

  return twolettersArr;
}

// 한글 체크 
function checkHan(str){
  var reg = /^[가-힣]+$/g;
  
  return reg.test(str);
}

// 이메일 체크
function chkEmail(email){
  var idx = email.indexOf("@email.com");
  var length = email.length;
  // 도메인 체크 
  if(idx == -1){
    return false;
  }
  // 길이 체크
  if(length >= 11 && length < 20){
    return true;
  }else{
    return false;
  }

}

// 닉네임 체크 
function chkNick(nickname){
  // 한글체크 
  if(!checkHan(nickname)){
    return false;
  }
  // 길이 체크
  var len = nickname.length;
  if(len >= 1 && len < 20){
    return true;
  }else{
    return false;
  }
}

// 문자열 배열 오름차순
function arrAsc(arr){
  arr = arr.sort();
  return arr;
}

module.exports = problem6;
