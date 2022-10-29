function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    let point = word.charCodeAt(i);
    if (point >= 65 && point <= 90) {
      point = 155 - point;
      answer += String.fromCharCode(point);
    } else if (point >= 97 && point <= 122) {
      point = 219 - point;
      answer += String.fromCharCode(point);
    } else {
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
