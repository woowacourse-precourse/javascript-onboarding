/*
[기능목록]

1. 연속된 중복문자 제거

*/


function deleteSequenceString(cryptogram){
  let str = cryptogram;
  let flag = 1;
  while(flag === 1){
    let result = "";
    let count = 1;
    flag = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i+1]){
        count += 1;
        flag = 1;
      }
      else{
        if(count > 1){
          count = 1
        }else{
          result += str[i];
        }
      }
    }
    str = result;
  }

  return str;
}

function problem2(cryptogram) {
  let answer;
  answer = deleteSequenceString(cryptogram);
  return answer;
}


module.exports = problem2;
