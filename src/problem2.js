function problem2(cryptogram) {
  var answer;

  return answer;
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

  for (let i = 1; i < curCryptogram.length; i++) {
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
