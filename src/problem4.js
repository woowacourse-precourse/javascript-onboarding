function convert(word) {
  let index;
  let res = [];
  for (let i = 0; i < word.length; i++) {
    index = word[i].charCodeAt(0);
    if (index >= 65 && index <= 90) {
      index = 90 - (index - 65);
      res.push(String.fromCharCode(index));
    } else if (index >= 97 && index <= 122) {
      index = 122 - (index - 97);
      res.push(String.fromCharCode(index));
    } else if (index >= 45032 && index <= 55203) {
      return null;
    } else {
      res.push(word[i]);
    }
  }
  return res.join("");
}



function problem4(word) {
  var answer;
  let cWord = convert(word);
  answer = cWord;
  return answer;
}

module.exports = problem4;
