function problem4(word) {
  let ans = '';
  let ascii;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === ' ') ans += word[i];
    else {
      ascii = word[i].charCodeAt(0);
      ans += String.fromCharCode(ascii >= 65 && ascii <= 90 ? 155 - ascii : 219 - ascii);
    }
  }
  return ans;
}

module.exports = problem4;
