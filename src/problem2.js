function problem2(cryptogram) {
  const answer = [];
  let deletedLetter;
  const length = {
    minimum: 1,
    maximum: 1000,
  };

  if (!checkStringLength(cryptogram, length.minimum, length.maximum)) return;
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

function checkStringLength(string, minimum, maximum) {
  if (string.length < minimum || string.length > maximum) {
    console.error(
      `길이가 ${minimum} 이상 ${maximum} 이하인 문자열을 입력해주세요`
    );
    return false;
  }
  return true;
}

module.exports = problem2;
