function problem4(word) {
  const answer = getReverseWord([...word]);
  return answer;
}

function getReverseWord(word) {
  const reversedWord = [];
  word.forEach((char) => {
    const isAlpha = checkAlpha(char);

    if (isAlpha === 'uppercase') {
      reversedWord.push(String.fromCharCode(155 - char.charCodeAt(0)));
    } else if (isAlpha === 'lowercase') {
      reversedWord.push(String.fromCharCode(219 - char.charCodeAt(0)));
    } else {
      reversedWord.push(char);
    }
  });
  return reversedWord.join('');
}

function checkAlpha(char) {
  if ('A' <= char && char <= 'Z') {
    return 'uppercase';
  } else if ('a' <= char && char <= 'z') {
    return 'lowercase';
  }
  return 'default';
}

module.exports = problem4;
