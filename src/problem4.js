function problem4(word) {
  const pattern = /[a-zA-Z\s]/g;
  let answer = [];

for (i=0; i<word.length; i++) {
  if (word[i].match(pattern)) {
    if (word[i] === " ") {
      answer.push(word[i]);
    }
    else if (word[i] === word[i].toUpperCase()) {
      answer.push(String.fromCharCode(155-word[i].charCodeAt()));
    }
    else {
      answer.push(String.fromCharCode(219-word[i].charCodeAt()));
    }
  }
  else {
    answer.push(word[i]);
  }
}
  return answer.join('');
}

module.exports = problem4;
