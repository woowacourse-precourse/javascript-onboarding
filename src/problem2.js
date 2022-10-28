function problem2(cryptogram) {
  while (1) {
    let removeList = [];
    cryptogram.split("").forEach((x, idx) => {
      if (x === cryptogram[idx + 1]) {
        removeList.push(idx);
      }
    });
    // TODO: removeList에 담긴 index를 이용해서 배열을 조정
  }
  return cryptogram;
}

console.log(problem2("browoanoommnaon"));
console.log(problem2('zyelleyz'))

module.exports = problem2;
