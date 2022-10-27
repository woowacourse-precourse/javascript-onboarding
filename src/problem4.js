const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA';

function problem4(word) {
  let answer;
  let reversedWordArray = [];
  const validWord = /^[a-zA-Z\s]*$/;

  if (word.length < 1 || word.length > 1000) {
    console.error('길이가 1 이상 1000 이하인 문자열을 입력해주세요');
    return;
  }

  if (!validWord.test(word)) {
    console.error('알파벳을 입력해주세요');
    return;
  }

  const wordArray = word.split(' ');

  wordArray.forEach((letter) => {
    const words = [...letter];

    const reversedWord = words.map((w) => {
      const index = alphabet.indexOf(w);
      return reversedAlphabet.charAt(index);
    });

    reversedWordArray.push(reversedWord.join(''));
  });

  return answer;
}

module.exports = problem4;
