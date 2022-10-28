function problem2(cryptogram) {
  while (1) {
    let removeList = [];
    cryptogram.split("").forEach((x, idx) => {
      if (x === cryptogram[idx + 1]) {
        removeList.push(idx);
      }
    });
    removeList.forEach((removeIdx, idx) => {
      cryptogram =
        cryptogram.slice(0, removeIdx) + cryptogram.slice(removeIdx + 2);
      removeList[idx + 1] -= 2;
    });
    if (removeList.length === 0) break;
  }
  return cryptogram;
}

console.log(problem2("browoanoommnaon"));
console.log(problem2("zyelleyz"));

module.exports = problem2;
