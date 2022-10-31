function problem4(word) {
  var answer = [];
  for (let i = 0; i < word.length; i++) {
    let temp = word.charCodeAt(i);
    if ((65 <= temp) && (temp <= 90)) {
      answer.push(String.fromCharCode(155 - temp));
    } else if ((97 <= temp) && (temp <= 122)) {
      answer.push(String.fromCharCode(219 - temp));
    } else {
      answer.push(word[i]);
    }
  }
  return answer.join('');
}

module.exports = problem4;
