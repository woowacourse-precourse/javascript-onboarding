function problem4(word) {
  var answer;

  let asciiArr = [];

  for (let i = 0; i < word.length; i++) {
    asciiArr.push(word.charCodeAt(i));
  }

  return answer;
}

module.exports = problem4;
