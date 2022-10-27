function problem2(cryptogram) {
  if (cryptogram.length === 0) return cryptogram;
  const tempt = [...cryptogram];
  let startIndex = 0;
  let count = 0;
  [...cryptogram].slice(1).forEach((char, index) => {
    if (tempt[startIndex] === char) {
      count = count + 1;
    } else if (count > 0) {
      tempt.splice(startIndex, count + 1);
      count = 0;
    } else {
      startIndex = startIndex + 1;
      count = 0;
    }
    if (index === cryptogram.length - 2 && count > 0) {
      tempt.splice(startIndex);
    }
  });
  const temptString = tempt.join('');
  if (temptString === cryptogram) return cryptogram;
  return problem2(temptString);
}

module.exports = problem2;
