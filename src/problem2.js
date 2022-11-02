function checkRepeat(cryptogram) {
  let copy_cryptogram = cryptogram;
  let isRepeated = false;

  for (let i = 0; i < copy_cryptogram.length - 1; i++) {
    if (copy_cryptogram[i] === copy_cryptogram[i + 1]) {
      copy_cryptogram =
        copy_cryptogram.slice(0, i) + copy_cryptogram.slice(i + 2);
      isRepeated = true;
    }
  }

  return {
    copy_cryptogram,
    isRepeated,
  };
}

function problem2(cryptogram) {
  let _cryptogram = cryptogram;

  while (true) {
    const { isRepeated, copy_cryptogram } = checkRepeat(_cryptogram);
    _cryptogram = copy_cryptogram;

    if (!isRepeated) break;
    checkRepeat(_cryptogram);
  }

  return _cryptogram;
}

// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
