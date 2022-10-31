function problem2(cryptogram) {
  let curCryptogram = cryptogram;

  while (curCryptogram.length !== 0) {
    let duplicationArr = duplicationSection(curCryptogram);

    if (duplicationArr.length === 0) return curCryptogram;

    for (let i = duplicationArr.length - 1; i >= 0; i--) {
      curCryptogram = sliceDuplication(curCryptogram, duplicationArr[i]);
    }
  }

  return curCryptogram;
}

const sliceDuplication = (curCryptogram, duplicationArr) => {
  const firstIndex = duplicationArr[0];
  const lastIndex = duplicationArr[1];

  return (
    curCryptogram.substring(0, firstIndex) + curCryptogram.substring(lastIndex)
  );
};

const duplicationSection = (curCryptogram) => {
  const duplicationArr = [];
  let duplicationCount = 1;
  let curChar = curCryptogram[0];
  let curCryptogramLength = curCryptogram.length;

  for (let i = 1; i < curCryptogramLength; i++) {
    if (curCryptogram[i] === curChar) {
      duplicationCount += 1;
      continue;
    }

    if (duplicationCount > 1) {
      duplicationArr.push([i - duplicationCount, i]);
      duplicationCount = 1;
    }

    curChar = curCryptogram[i];
  }

  return duplicationArr;
};

module.exports = problem2;
