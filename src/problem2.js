const MIN_CRYPTOGRAM_LENGTH = 1;
const MAX_CRYPTOGRAM_LENGTH = 1000;
function problem2(cryptogram) {
  var answer;
  if (!checkValidation(cryptogram)) throw new Error("잘못된 입력입니다.");
  answer = decryption(cryptogram);
  return answer;
}
function getDuplicateValidator(cryptogram) {
  const duplicateValidator = new Array(cryptogram.length).fill(false);
  for (let x = 0; x < cryptogram.length - 1; x++) {
    if (cryptogram[x] == cryptogram[x + 1]) {
      duplicateValidator[x] = true;
      duplicateValidator[x + 1] = true;
    }
  }
  return duplicateValidator;
}
function getNextCryptogram(cryptogram) {
  let nextCryptogram = "";
  const duplicateValidator = getDuplicateValidator(cryptogram);
  for (let x = 0; x < cryptogram.length; x++) {
    if (!duplicateValidator[x]) nextCryptogram = nextCryptogram + cryptogram[x];
  }
  return nextCryptogram;
}

function checkValidation(cryptogram) {
  return checkLength(cryptogram) && checkLowercase(cryptogram);
}
function checkLength(cryptogram) {
  if (
    cryptogram.length >= MIN_CRYPTOGRAM_LENGTH &&
    cryptogram.length <= MAX_CRYPTOGRAM_LENGTH
  )
    return true;
  else return false;
}
function checkLowercase(cryptogram) {
  const LowerCase = cryptogram.toLowerCase();
  if (LowerCase == cryptogram) return true;
  else return false;
}

module.exports = problem2;
