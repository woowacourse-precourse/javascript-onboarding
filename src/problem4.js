function changeUpper(oneWordASCII, ans) {
  const newWordASCII = 90 - (oneWordASCII - 65);

  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
}

function changeLower(oneWordASCII, ans) {
  const newWordASCII = 122 - (oneWordASCII - 97);

  const newWord = String.fromCharCode(newWordASCII);

  ans.push(newWord);
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

function problem4(word) {
  let wordArr = word.split("");

  let ans = [];

  for (let i = 0; i < wordArr.length; i++) {
    const oneWordASCII = wordArr[i].charCodeAt();

    if (!checkAlphabet(ans, oneWordASCII, wordArr[i])) {
      continue;
    }

    checkUpperOrLower(oneWordASCII, ans);
  }

  return ans.join("");
}

module.exports = problem4;
