function removeOverlap(cryptogram) {
  cryptogram = [...cryptogram];

  for (var i = 0; i < cryptogram.length - 1; i++) {
    console.log(i);
    if (cryptogram[i] === cryptogram[i + 1]) {
      var startIndex = i;
      var overlapLength = 2;
      checkOverlap = true;
      i++;
      while (cryptogram[i] === cryptogram[i + 1]) {
        overlapLength++;
        i++;
      }
      cryptogram.splice(startIndex, overlapLength);
      i = i - overlapLength;
    }
  }

  cryptogram = cryptogram.join("");

  return cryptogram;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
