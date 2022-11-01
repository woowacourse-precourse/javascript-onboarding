function problem2(cryptogram) {
  if (cryptogram.length === 1) return cryptogram;

  let compareString;
  const alphaSet = new Set(cryptogram.split(""));

  do {
    compareString = cryptogram;
    cryptogram = deleteDuplication(compareString, alphaSet);
  } while (cryptogram && compareString !== cryptogram);

  return cryptogram;
}

function deleteDuplication(string, alphaSet) {
  alphaSet.forEach((alpha) => {
    const regExp = makeReg(alpha);
    string = string.replace(regExp, "");
  });
  return string;
}

function makeReg(alpha) {
  const flag = "g";
  return new RegExp(`[${alpha}+]{2,}`, flag);
}

module.exports = problem2;
