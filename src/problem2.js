let isChanged = false;

function problem2(cryptogram) {
  var answer;
  return answer;
}

function deleteOverlap(string) {
  let result = "";

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] == string[i + 1]) {
      i++;
      isChanged = true;
    } else {
      result += string[i];
    }
  }

  return result;
}

module.exports = problem2;
