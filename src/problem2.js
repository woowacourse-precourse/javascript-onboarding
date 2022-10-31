function problem2(cryptogram) {
  if (!isContinuous(cryptogram)) {
    return cryptogram;
  }
  while (isContinuous(cryptogram) && cryptogram.length !== 0) {
    cryptogram = filterStr(cryptogram);
  }
  const answer = cryptogram;
  return answer;
}

function isContinuous(cryptogram) {
  let continuityCount = 0;
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      continuityCount++;
    }
  }
  if (continuityCount > 0) return true;
  return false;
}

function splitStr(cryptogram) {
  const splitedStr = [];
  let removeIndex = 0;
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] !== cryptogram[i + 1]) {
      const sliceStr = cryptogram.substring(removeIndex, i + 1);
      removeIndex = i + 1;
      splitedStr.push(sliceStr);
    }
  }
  return splitedStr;
}

function filterStr(cryptogram) {
  const splitedStr = splitStr(cryptogram);
  return splitedStr.filter((str) => str.length < 2).join("");
}
module.exports = problem2;
