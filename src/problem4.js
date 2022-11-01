/*
기능 목록
1. 대문자 소문자 구분하는 기능
2. 문자를 아스키코드로 바꾸는 기능
3. 아스키코드를 다시 문자로 바꾸는 기능
*/



function chr_num(chr) {
  return chr.charCodeAt(0);
}

function upper_check(num) {
  if (num >= 65 && num <= 90)
    return true;
  
  return false;
}

function num_chr(num) {
  var new_num;
  if (upper_check(num))
    new_num = 90 - (num - 65);
  else
    new_num = 122 - (num - 97)

  return String.fromCodePoint(new_num);
}

function problem4(word) {
  var answer;

  answer = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ")
      answer += " ";
    else {
      let ascii = chr_num(word[i]);
      answer += num_chr(ascii);
    }
  }

  return answer;
}

module.exports = problem4;
