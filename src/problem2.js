function deleteDuplicateLetters(cryptogramLetters) {
  const filteredCryptogramLetters = cryptogramLetters.filter(
    (letter, i, arr) => arr[i + 1] !== letter && arr[i - 1] !== letter
  );

  if (filteredCryptogramLetters.length === cryptogramLetters.length) {
    return cryptogramLetters;
  }

  return deleteDuplicateLetters(filteredCryptogramLetters);
}

function problem2(cryptogram) {
  const cryptogramLetters = [...cryptogram];
  const answer = deleteDuplicateLetters(cryptogramLetters).join('');

  return answer;
}

module.exports = problem2;
