function problem2(cryptogram) {
  return cryptogramSolver(cryptogram);
}

function cryptogramSolver(cryptogram) {
  return removeDuplicateChar(cryptogram.split(""));
}

function removeDuplicateChar(cryptogramArr) {
  const nextCryptogramArr = [];
  let beforeChar = cryptogramArr[0];
  let isBeforeDuplicate = false;
  let isDeleteStep = 0;

  for (let i = 1; i <= cryptogramArr.length; i++) {
    let nowChar = cryptogramArr[i];
    if (beforeChar === nowChar) {
      isBeforeDuplicate = true;
      isDeleteStep++;
    } else {
      isBeforeDuplicate ? (isBeforeDuplicate = false) : nextCryptogramArr.push(beforeChar);
    }
    beforeChar = nowChar;
  }
  return isDeleteStep > 0 ? removeDuplicateChar(nextCryptogramArr) : nextCryptogramArr.join("");
}

module.exports = problem2;
