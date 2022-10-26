function checkUpperOrLower(oneWordASCII, ans) {
  if (oneWordASCII >= 65 && oneWordASCII <= 90) {
    // 대문자는 대문자로 변경
    const newWordASCII = 90 - (oneWordASCII - 65);

    const newWord = String.fromCharCode(newWordASCII);

    ans.push(newWord);
  } else if (oneWordASCII >= 97 && oneWordASCII <= 122) {
    // 소문자는 소문자로 변경
    const newWordASCII = 122 - (oneWordASCII - 97);

    const newWord = String.fromCharCode(newWordASCII);

    ans.push(newWord);
  }
}

function checkSpaceBar(ans, word) {
  if (word === " ") {
    ans.push(word);
  }
}

function problem4(word) {
  let wordArr = word.split("");

  let ans = [];

  for (let i = 0; i < wordArr.length; i++) {
    checkSpaceBar(ans, wordArr[i]);

    const oneWordASCII = wordArr[i].charCodeAt();

    checkUpperOrLower(oneWordASCII, ans);
  }

  return ans.join("");
}

module.exports = problem4;
