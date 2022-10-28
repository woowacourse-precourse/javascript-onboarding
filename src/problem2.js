function checkCryptogramLength(cryptogram) {
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return false;
  }

  return true;
}

function checkCryptogramOnlyLowerCase(cryptogram) {
  const regex = /^[a-z]+$/g;

  if (!regex.test(cryptogram)) {
    return false;
  }

  return true;
}

function compareStackWithCrypto(stack, cryptoArr) {
  for (let crypto of cryptoArr) {
    if (crypto === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(crypto);
    }
  }

  return stack.join("");
}

function problem2(cryptogram) {
  if (
    !checkCryptogramLength(cryptogram) ||
    !checkCryptogramOnlyLowerCase(cryptogram)
  ) {
    return;
  }

  let stack = [];

  let cryptoArr = cryptogram.split("");

  const ans = compareStackWithCrypto(stack, cryptoArr);

  return ans;
}

module.exports = problem2;
