function problem4(word) {
  var answer = "";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = uppercase.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (uppercase.includes(word[i])) {
      answer += uppercase[25 - uppercase.indexOf(word[i])];
    } else if (lowercase.includes(word[i])) {
      answer += lowercase[25 - lowercase.indexOf(word[i])];
    } else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
