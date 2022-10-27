const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA';

function problem4(word) {
  let answer;
  const validWord = /^[a-zA-Z\s]*$/;

  if (word.length < 1 || word.length > 1000) {
    console.error('길이가 1 이상 1000 이하인 문자열을 입력해주세요');
    return;
  }

  if (!validWord.test(word)) {
    console.error('알파벳을 입력해주세요');
    return;
  }

  return answer;
}

module.exports = problem4;
