function problem4(word) {
  var answer;
  temp = [];
  for (let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      temp[i] = 90 - (ascii - 65);
    } else if (97 <= ascii && ascii <= 122) {
      temp[i] = 122 - (ascii - 97);
    } else {
      temp[i] = ascii;
    }
  }
  answer = String.fromCharCode(...temp);
  return answer;
}

module.exports = problem4;

// 90 - (ascii - 65) 대문자
// 122 - (ascii - 97) 소문자
