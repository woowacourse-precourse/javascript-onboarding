const isSame = (a, b) => a === b;
const loop = (cb, string) => cb(string);
const popDuplicates = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) i++;
    else result += string[i];
  }
  return result;
};
const decrypt = (cryptogram) => {
  if (!isSame(cryptogram, popDuplicates(cryptogram))) {
    return loop(decrypt, popDuplicates(cryptogram));
  }
  return cryptogram;
};

function problem2(cryptogram) {
  return decrypt(cryptogram);
}

module.exports = problem2;
