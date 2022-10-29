const removeOverlapChar = (string) => {
  let removeIdx = [];
  [...string].forEach((char, idx) => {
    if (char === string[idx - 1]) removeIdx.push(idx, idx - 1);
  });

  return [...string].filter((_, idx) => !removeIdx.includes(idx)).join("");
};

function problem2(cryptogram) {
  let isOverlap = true;
  while (isOverlap) {
    const removedString = removeOverlapChar(cryptogram);
    if (cryptogram === removedString) isOverlap = false;
    else cryptogram = removedString;
  }

  return cryptogram;
}

module.exports = problem2;
