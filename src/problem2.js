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
  let before = "";

  for (let i = 0; i < string.length; i++) {
    if (i < string.length - 1 && before === "" && string[i] === string[i + 1]) {
      i++;
      isChanged = true;
      before = string[i];
    } else if (before === string[i]) {
      isChange = true;
    } else {
      result += string[i];
      before = "";
    }
  }

  return result;
}

module.exports = problem2;
