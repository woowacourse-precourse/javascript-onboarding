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
  const wordlist = [...word];
  if (word.length > 1000 || word.length < 1){
    return 'word 길이를 확인해주세요';
  }
  else{
    
  }
  return answer;
}

module.exports = problem4;

problem4('I love you');