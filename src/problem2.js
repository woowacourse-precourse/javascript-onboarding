function deleteDuplicateCharacters(cryptogram) {
  const deletedString = [...cryptogram].reduce((acc, cur, i, arr) => {
    if (cur === arr[i + 1]) {
      return acc;
    }

    if (cur === arr[i - 1]) {
      return acc;
    }

    acc += cur;
    return acc;
  }, '');

  if (deletedString === cryptogram) {
    return cryptogram;
  }

  return deleteDuplicateCharacters(deletedString);
}

function problem2(cryptogram) {
  const answer = deleteDuplicateCharacters(cryptogram);

  return answer;
}

module.exports = problem2;
