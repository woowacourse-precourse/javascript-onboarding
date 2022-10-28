function problem2(cryptogram) {
  var answer;
  if (!checkValidation(cryptogram)) throw new Error("잘못된 입력입니다.");
  answer = decryption(cryptogram);
  return answer;
}
function decryption(cryptogram) {
  let index = 0;
  const stack = [];
  while (index < cryptogram.length) {
    if (!stack) stack.push(cryptogram[index]);
    else {
      if (stack[stack.length - 1] == cryptogram[index]) {
        index = progressIndex(cryptogram, index, cryptogram[index]) - 1;
        stack.pop();
      } else {
        stack.push(cryptogram[index]);
      }
    }
    index++;
  }
  return getString(stack);
}
function progressIndex(cryptogram, index, targetChar) {
  while (cryptogram[index] == targetChar) index++;
  return index;
}
function getString(Array) {
  return Array.join("");
}

function checkValidation(cryptogram) {
  return checkLength(cryptogram) && checkLowercase(cryptogram);
}
function checkLength(cryptogram) {
  if (cryptogram.length >= 1 && cryptogram.length <= 1000) return true;
  else return false;
}
function checkLowercase(cryptogram) {
  const LowerCase = cryptogram.toLowerCase();
  if (LowerCase == cryptogram) return true;
  else return false;
}

module.exports = problem2;
