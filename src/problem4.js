function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    let point = word.charCodeAt(i);
    if (point >= 65 && point <= 90) {
    } else if (point >= 97 && point <= 122) {
    } else {
    }
  }
  return answer;
}

module.exports = problem4;
