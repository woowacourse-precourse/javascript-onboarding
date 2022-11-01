function problem4(word) {
  var answer = "";
  var multiply;

  for(var i = 0; i < word.length; i++){
    if(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
      if(word[i].charCodeAt(0) <= 77) {
        multiply = 77.5 - word[i].charCodeAt(0);
        answer += String.fromCharCode(word[i].charCodeAt(0) + (2 * multiply));
      }
      if(word[i].charCodeAt(0) >= 78) {
        multiply = word[i].charCodeAt(0) - 77.5;
        answer += String.fromCharCode(word[i].charCodeAt(0) - (2 * multiply));
      }
    }
    else if(word[i].charCodeAt(0) >= 98 && word[i].charCodeAt(0) <= 122) {
      if(word[i].charCodeAt(0) <= 109) {
        multiply = 109.5 - word[i].charCodeAt(0);
        answer += String.fromCharCode(word[i].charCodeAt(0) + (2 * multiply));
      }
      if(word[i].charCodeAt(0) >= 110) {
        multiply = word[i].charCodeAt(0) - 109.5;
        answer += String.fromCharCode(word[i].charCodeAt(0) - (2 * multiply));
      }
    }
    else answer += word[i];
  }
  return answer;
}
module.exports = problem4;