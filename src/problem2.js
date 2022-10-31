function stringToArray(array) {
  return [...array];
}

function checkDupliate(cryptogram) {
  let cryptogramArray = stringToArray(cryptogram);
  let notDuplicateArray = [];
  let i = 0;

  for (; i < cryptogramArray.length; i++) {
    if (
      cryptogramArray[i] === notDuplicateArray[notDuplicateArray.length - 1]
    ) {
      notDuplicateArray.pop();
    } else if (
      cryptogramArray[i] !== notDuplicateArray[notDuplicateArray.length - 1]
    ) {
      notDuplicateArray.push(cryptogramArray[i]);
    }
  }

  return notDuplicateArray;
}

function problem2(cryptogram) {
  const notDuplicateArray = checkDupliate(cryptogram);
  const answer = notDuplicateArray.join("");

  return answer;
}

module.exports = problem2;
