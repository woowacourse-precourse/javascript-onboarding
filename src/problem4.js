const FIRST_BIG_LETTER = 65;
const LAST_BIG_LETTER = 90;

const FIRST_SMALL_LETTER = 97;
const LAST_SMALL_LETTER = 122;

const rBIG_ENGLISH = /[A-Z]/;
const rSMALL_ENGLISH = /[a-z]/;

const makeAlphaReverse = (alphabet, firstAlphabetAskii, lastAlphabetAskii) => {
  const alphabetAskii = alphabet.charCodeAt();
  const diff = alphabetAskii - firstAlphabetAskii;
  const reversedAlphabetAskii = lastAlphabetAskii - diff;
  return String.fromCharCode(reversedAlphabetAskii);
};

function problem4(word) {
  let answer = "";

  for (const text of word) {
    if (rBIG_ENGLISH.test(text)) {
      answer += makeAlphaReverse(text, FIRST_BIG_LETTER, LAST_BIG_LETTER);
    } else if (rSMALL_ENGLISH.test(text)) {
      answer += makeAlphaReverse(text, FIRST_SMALL_LETTER, LAST_SMALL_LETTER);
    } else {
      answer += text;
    }
  }

  return answer;
}

module.exports = problem4;
