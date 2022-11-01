function decode(word) {
  const re = /([a-z])\1{1,}/;

  // 정규 표현식을 이용해 2개이상 연속된 중복 소문자 검사
  while (1) {
    if (re.test(word)) {
      word = word.replace(re, '');
    } else {
      break;
    }
  }

  return word;
}

function problem2(cryptogram) {
  let answer = '';

  answer = decode(cryptogram);

  return answer;
}

module.exports = problem2;
