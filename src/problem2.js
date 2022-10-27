function problem2(cryptogram) {
  let answer = [];

  if (cryptogram.length < 1 || cryptogram.length > 1001) {
    alert('길이가 1 이상 1000 이하인 문자열을 입력해주세요');
    return;
  }

  if (cryptogram !== cryptogram.toLowerCase()) {
    alert('소문자를 입력해주세요');
    return;
  }

  for (const letter of cryptogram) {
    if (answer[answer.length - 1] === letter) {
      answer.pop();
    } else {
      answer.push(letter);
    }
  }

  return answer.join('');
}

module.exports = problem2;
