function problem4(word) {
  var answer="";

  for (let i=0; i<word.length; i++) {
    if (65<=word.charCodeAt(i) && word.charCodeAt(i)<=90) { // 대문자
      answer += String.fromCharCode(155 - word.charCodeAt(i));
    }
    else if (97<=word.charCodeAt(i) && word.charCodeAt(i)<=122) { // 소문자
      answer += String.fromCharCode(219 - word.charCodeAt(i));
    }
    else if (word.charCodeAt(i) === 32) { // 공백일 경우
      answer += " ";
    }
    else { // 특수문자일 경우
      answer += word.charAt(i);
    } 
  }
  return answer;
}

module.exports = problem4;
