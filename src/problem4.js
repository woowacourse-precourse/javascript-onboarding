function problem4(word) {
  function convert(word, index) {
    const charCode = word.charCodeAt(index);

    if (65 <= charCode && charCode <= 90) {
      return String.fromCharCode(155 - charCode);
    }
    if (97 <= charCode && charCode <= 122) {
      return String.fromCharCode(219 - charCode);
    }
    return word[index];
  }

  let answer = '';

  for (let i = 0; i < word.length; i++) {
    answer += convert(word, i);
  }
  return answer;
}

module.exports = problem4;
