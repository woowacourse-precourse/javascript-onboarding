function decoder(decodeCryptogram) {
  let decodeHelper = "";
  let duplicatePoint = false;
  let reDecodeCheck = false;

  do {
    if (decodeCryptogram.length === 1) return decodeCryptogram;
    let i;
    duplicatePoint = false;
    reDecodeCheck = false;

    for (i = 0; i < decodeCryptogram.length - 1; i++) {
      if (decodeCryptogram[i] === decodeCryptogram[i + 1]) {
        duplicatePoint = true;
        reDecodeCheck = true;
      } else if (duplicatePoint === true) {
        duplicatePoint = false;
      } else decodeHelper = decodeHelper.concat(decodeCryptogram[i]);
    }
    if (decodeCryptogram[i] !== decodeCryptogram[i - 1]) {
      decodeHelper = decodeHelper.concat(decodeCryptogram[i]);
    }
    decodeCryptogram = decodeHelper;
    decodeHelper = "";
  } while (reDecodeCheck === true && decodeCryptogram.length > 1);
  return decodeCryptogram;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
