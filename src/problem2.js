function problem2(cryptogram) {
  if (!isInitialContinuous(cryptogram)) {
    return cryptogram;
  }
  return answer;
}

function isInitialContinuous(cryptogram) {
  let continuityCount = 0;
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      continuityCount++;
    }
  }
  if (continuityCount > 0) return true;
  return false;
}

function isDuplicate(cryptogram) {
  const setCryptogram = new Set(cryptogram);
  if (cryptogram.length !== setCryptogram.size) {
    return true;
  }
  return false;
}
module.exports = problem2;
