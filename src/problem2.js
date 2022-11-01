function problem2(cryptogram) {
  const cryptogramArray = cryptogram.split("");

  while (true) {
    const detectedIndexes = setDupIndexes(cryptogramArray);

    if (detectedIndexes.length === 0) {
      break;
    }
    detectedIndexes.map((index) => cryptogramArray.splice(index, 1));
  }

  return cryptogramArray.join("");
}

function setDupIndexes(strArray) {
  const dupIndexs = [];
  let check = false;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i + 1]) {
      check = true;
      dupIndexs.unshift(i);
    } else if (check) {
      check = false;
      dupIndexs.unshift(i);
    }
  }

  return dupIndexs;
}

module.exports = problem2;
