function alphabet(letter){
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
    //대문자
    return String.fromCharCode(155 - letter.charCodeAt(0));
  }
  else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
    //소문자
    return String.fromCharCode(219 - letter.charCodeAt(0));
  }
  else{
    return letter
  }
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
