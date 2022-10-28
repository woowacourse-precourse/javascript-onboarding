function problem2(cryptogram) {
  return cryptogramSolver(cryptogram);
}

function cryptogramSolver(cryptogram) {
  return cryptogram;
}

function removeDuplicatesChar(cryptogramArr) {
  let progressChar;
  for (let i = cryptogramArr.length - 1; i >= 0; i--) {
    if (cryptogramArr[i] == cryptogramArr[i + 1]) {
      progressChar = cryptogramArr[i];
      cryptogramArr[i] = "";
      cryptogramArr[i + 1] = "";
    } else if (progressChar == cryptogramArr[i]) {
      progressChar = cryptogramArr[i];
      cryptogramArr[i] = "";
    } else {
      progressChar = "";
    }
  }
  return cryptogramArr;
}

module.exports = problem2;
