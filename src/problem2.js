function problem2(cryptogram) {
  var answer;

  return answer;
}

const sliceDuplication = (curCryptogram, duplicationIdx) => {
  const firstIndex = duplicationIdx[0];
  const lastIndex = duplicationIdx[1];

  return (
    curCryptogram.substring(0, firstIndex) + curCryptogram.substring(lastIndex)
  );
};

module.exports = problem2;
