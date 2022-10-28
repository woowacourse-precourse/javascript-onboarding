function checkStringDuplication(str) {
  let beforeWord = '';
  for (i = 0; i < str.length; i++) {
    if (beforeWord === str[i]) {
      return true;
    } else {
      beforeWord = str[i];
    }
  }
  return false;
}

function getDuplicateIndex(str, startIndex) {
  const COMPARISON = str[startIndex];
  let endIndex = startIndex;
  for (i = startIndex; i < str.length; i++) {
    if (str[i] === COMPARISON) {
      endIndex = i;
    } else {
      break;
    }
  }
  return [startIndex, endIndex];
}

function problem2(cryptogram) {
  var answer;

  while (checkStringDuplication(cryptogram)) {
    for (j = 0; j < cryptogram.length; j++) {
      const [startIndex, endIndex] = getDuplicateIndex(cryptogram, j);
      if (startIndex != endIndex) {
        cryptogram =
          cryptogram.substring(0, startIndex) +
          cryptogram.substring(endIndex + 1);
        j = j - 1;
      }
    }
  }

  answer = cryptogram;

  return answer;
}

module.exports = problem2;
