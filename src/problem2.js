/*
기능 목록
1. 앞의 문자와 같은지 다른지 확인하는 기능
2. 중복 문자가 있는 문자열인지 확인하는 기능
3. 문자열에서 중복 문자를 제거하는 기능
*/

function double_check(s1, s2) {
  if (s1 == s2) 
    return true;
  
  return false;
}

function check_str(str) {
  var chr = "";

  for (let i = 0; i < str.length; i++) {

    if (double_check(chr, str[i])) 
      return true;
    else
      chr = str[i];

  }
  return false;
}

function double_delete(str) {
  var pre_char = "";
  var new_str = "";

  for (let i = 0; i < str.length; i++) {
    if (!double_check(pre_char, str[i])) {
      new_str += str[i];
      pre_char = str[i];
    }
  }

  return new_str;
}


function problem2(cryptogram) {
  var answer;

  return answer;
}

module.exports = problem2;
