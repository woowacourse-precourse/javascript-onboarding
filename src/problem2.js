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
    console.log(str[i]);
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
  return answer;
}

module.exports = problem2;
