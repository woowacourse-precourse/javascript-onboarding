// 아스키 코드로 변환 후 대문자(65 ~ 90), 소문자(97 ~ 122) 번호의 차이를 계산해 문자 변환하는 함수
function convertWord(word) {
  const result = [];
  const re = /([A-Za-z])/;

  for (let i = 0; i < word.length; i++) {
    let temp;

    if (!re.test(word[i])) {
      result.push(word[i]);
      continue;
    }

    if (word[i] === word[i].toUpperCase()) {
      temp = word.charCodeAt(i) - 65;
      result.push(String.fromCharCode(90 - temp));
    } else {
      temp = word.charCodeAt(i) - 97;
      result.push(String.fromCharCode(122 - temp));
    }
  }

  return result.join('');
}

function problem4(word) {
  const answer = convertWord(word);

  return answer;
}

module.exports = problem4;
