function problem4(word) {

  let result = [];

  for (let i = 0; i < word.length; i++) {
    let code = word[i].charCodeAt();
    if (code >= 65 && code <= 90) {
      result.push(String.fromCharCode(90 - (code - 65)));
    } else if (code >= 97 && code <= 122) {
      result.push(String.fromCharCode(122 - (code - 97)));
    } else {
      result.push(word[i]);
    }
  }

  return result.join('');
}

module.exports = problem4;
