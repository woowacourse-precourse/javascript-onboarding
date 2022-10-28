function addChangedWord(newWordASCII, ans) {
  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
}

function changeUpper(oneWordASCII, ans) {
  const newWordASCII = 90 - (oneWordASCII - 65);

  addChangedWord(newWordASCII, ans);
}

function changeLower(oneWordASCII, ans) {
  const newWordASCII = 122 - (oneWordASCII - 97);

  addChangedWord(newWordASCII, ans);
}

function checkUpperOrLower(oneWordASCII, ans) {
  if (oneWordASCII >= 65 && oneWordASCII <= 90) {
    changeUpper(oneWordASCII, ans);
  }

  if (oneWordASCII >= 97 && oneWordASCII <= 122) {
    changeLower(oneWordASCII, ans);
  }
}

function checkAlphabet(ans, word) {
  const regex = /^[a-z|A-Z]+$/;

  if (!regex.test(word)) {
    ans.push(word);

    return false;
  }

  return true;
}

function changeWord(word, ans) {
  for (let i = 0; i < word.length; i++) {
    if (!checkAlphabet(ans, word[i])) {
      continue;
    }

    const oneWordASCII = word[i].charCodeAt();

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
