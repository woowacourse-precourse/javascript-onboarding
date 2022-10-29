function problem2(cryptogram) {
  const answer = [];
  let deletedLetter;

  if (cryptogram.length < 1 || cryptogram.length > 1001) {
    alert('길이가 1 이상 1000 이하인 문자열을 입력해주세요');
    return;
  }

  if (!isLowerCase(cryptogram)) return;

  for (const letter of cryptogram) {
    if (answer[answer.length - 1] === letter) {
      answer.pop();
      deletedLetter = letter;
    }

    if (deletedLetter !== letter) {
      answer.push(letter);
      deletedLetter = '';
    }
  }

  return answer.join('');
}

function isLowerCase(string) {
  const regex = /[^a-z]/;
  if (regex.test(string)) {
    console.error('소문자를 입력해주세요');
    return false;
  }
  return true;
}

module.exports = problem2;
