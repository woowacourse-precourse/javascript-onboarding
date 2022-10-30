const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA';

function problem4(word) {
  let answer;
  const reversedWordArray = [];

  if (!isAlphabet(word)) return;
  if (!isValidLength(word, 1, 1000)) return;

  const wordArray = word.split(' ');

  wordArray.forEach((letter) => {
    const words = [...letter];

    const reversedWord = words.map((w) => {
      const index = alphabet.indexOf(w);
      return reversedAlphabet.charAt(index);
    });

    reversedWordArray.push(reversedWord.join(''));
    answer = reversedWordArray.join(' ');
  });

  return answer;
}

function isValidLength(word, min, max) {
  if (word.length < min || word.length > max) {
    console.error(
      `길이가 ${min} 이상 ${max.toLocaleString()} 이하인 문자열을 입력해주세요`
    );
    return false;
  }
  return true;
}

function isAlphabet(word) {
  const validWord = /^[a-zA-Z\s]*$/;

  if (!validWord.test(word)) {
    console.error('알파벳을 입력해주세요');
    return false;
  }
  return true;
}

module.exports = problem4;
