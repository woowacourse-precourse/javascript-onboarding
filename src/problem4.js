function problem4(word) {
  const result = [];

  for (let i=0; i<word.length; i++) {
    const ascii = word.charCodeAt(i);
    if (ascii === 32) {
      result.push(' ');
    } else if (ascii >= 65 && ascii <= 90) {
      result.push(String.fromCharCode(90 - (ascii - 65)));
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(String.fromCharCode(122 - (ascii - 97)));
    } else {
      result.push(word[i]);
    }
  }

  return result.join('');
}

module.exports = problem4;
