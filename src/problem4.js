function addChangedWord(ans, newWordASCII) {
  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
}

function changeUpper(oneWordASCII, ans) {
  const newWordASCII = 90 - (oneWordASCII - 65);

  addChangedWord(ans, newWordASCII);
}

function changeLower(oneWordASCII, ans) {
  const newWordASCII = 122 - (oneWordASCII - 97);

  addChangedWord(ans, newWordASCII);
}

function checkUpperOrLower(oneWordASCII, ans) {
  if (oneWordASCII >= 65 && oneWordASCII <= 90) {
    changeUpper(oneWordASCII, ans);
  } else if (oneWordASCII >= 97 && oneWordASCII <= 122) {
    changeLower(oneWordASCII, ans);
  }
}

function checkAlphabet(ans, oneWordASCII, word) {
  if (
    oneWordASCII < 65 ||
    (oneWordASCII > 90 && oneWordASCII < 97) ||
    oneWordASCII > 122
  ) {
    ans.push(word);

    return false;
  }

  return true;
}

function changeWord(word, ans) {
  for (let i = 0; i < word.length; i++) {
    const oneWordASCII = word[i].charCodeAt();

    if (!checkAlphabet(ans, oneWordASCII, word[i])) {
      continue;
    }

    checkUpperOrLower(oneWordASCII, ans);
  }
}

function problem4(word) {
  if (word.length < 1 || word.length > 1000) {
    return;
  }

  let ans = [];

  changeWord(word, ans);

  return ans.join("");
}

module.exports = problem4;
