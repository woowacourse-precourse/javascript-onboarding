function problem2(cryptogram) {
  return answer;
}

function isDuplicate(cryptogram) {
  const setCryptogram = new Set(cryptogram);
  if (cryptogram.length !== setCryptogram.size) {
    return true;
  }
  return false;
}
module.exports = problem2;
