function stringToArray(array) {
  return [...array];
}

function checkOverlap(cryptogram) {
  let cryptogramArray = stringToArray(cryptogram);
  let notOverlappedArray = [];
  let i = 0;

  for (; i < cryptogramArray.length; i++) {
    if (
      cryptogramArray[i] === notOverlappedArray[notOverlappedArray.length - 1]
    ) {
      notOverlappedArray.pop();
    } else if (
      cryptogramArray[i] !== notOverlappedArray[notOverlappedArray.length - 1]
    ) {
      notOverlappedArray.push(cryptogramArray[i]);
    }
  }

  return notOverlappedArray;
}

function problem2(cryptogram) {
  const notOverlappedArray = checkOverlap(cryptogram);
  const answer = notOverlappedArray.join("");

  return answer;
}

module.exports = problem2;
