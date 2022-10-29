const removeOverlapChar = (string) => {
  let removeIdx = [];
  [...string].forEach((char, idx) => {
    if (char === string[idx - 1]) removeIdx.push(idx, idx - 1);
  });

  return [...string].filter((_, idx) => !removeIdx.includes(idx)).join("");
};

function problem2(cryptogram) {}

module.exports = problem2;
