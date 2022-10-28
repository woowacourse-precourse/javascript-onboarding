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

  return deletedString;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

function test() {
  console.log(deleteDuplicateCharacters('browoanoommnaon'));
  console.log(deleteDuplicateCharacters('zyelleyz'));
  console.log(deleteDuplicateCharacters('zyellleyz'));
  console.log(deleteDuplicateCharacters('zyeleyz'));
}

test();
