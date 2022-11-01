function reverseWord(w) {
  let num = w.charCodeAt(0);
  var ret;
  if (num >= 65 && num <= 90) {
      ret = String.fromCharCode(155 - num); // A + Z == 150 이다.
  }
  else if (num >= 97 && num <= 122) {
      ret = String.fromCharCode(219 - num);
  }
  return ret;
}
function isAlphabet(w){
  let num = w.charCodeAt(0);
  if (num >= 65 && num <= 90) { // 대문자라면
    return true;
  }
  else if (num >= 97 && num <= 122) { // 소문자라면
    return true;
  }
  return false;
}
function problem4(word) {
  var answer = '';
  for (var i = 0; i < word.length; i++) { 
      if(isAlphabet(word[i])) {
          answer += reverseWord(word[i]);
      } else {
        answer += word[i];
      }
  }
  return answer;
}
module.exports = problem4;
