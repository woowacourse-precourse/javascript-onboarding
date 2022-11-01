function problem4(word) {
  var answer = '';

  for(var i = 0; i < word.length; i++) {
    const char = word.charCodeAt(i);
    var num;
    
    if ( char >= 65 && char <= 90 ) { // 대문자
      num = word.charCodeAt(i) - 65;
      answer += String.fromCharCode(90 - num);
    } else if ( char >= 97 && char <= 122 ) { // 소문자
      num = word.charCodeAt(i) - 97;
      answer += String.fromCharCode(122 - num);
    } else { // 공백 및 다른 문자
      answer += word[i];
    } 
  }
  return answer;
}

module.exports = problem4;
