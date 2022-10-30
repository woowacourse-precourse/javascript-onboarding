let isChanged = true;

function problem2(cryptogram) {
  isChanged = true;

  while (isChanged) {
    isChanged = false;
    cryptogram = deleteOverlap(cryptogram);
  }

  return cryptogram;
}

function deleteOverlap(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (i < string.length - 1 && string[i] == string[i + 1]) {
      i++;
      isChanged = true;
    } else {
      result += string[i];
    }
  }

  return result;
}

module.exports = problem2;
