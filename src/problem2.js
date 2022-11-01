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
  var check = false;
  
  for (let i = 0; i < str.length; i++) {
    if (!double_check(pre_char, str[i])) {
      if (!check)
        new_str += pre_char;
      pre_char = str[i];
      check = false;
    }
    else
      check = true;
  }
  
  if (!double_check(str[str.length-1], new_str[new_str.length-1]))
    new_str += str[str.length-1];
  else
    new_str = new_str.slice(0, -1)
  
  return new_str;
}



function problem2(cryptogram) {
  var answer;
  answer = cryptogram;

  while (true) {
    if (!check_str(answer))
      break;
    
    answer = double_delete(answer);
  }

  return answer;
}

module.exports = problem2;