function problem2(cryptogram) {
  if (!cryptogram) return cryptogram;

  const duplicateLetterList = [];

  for (let i = 0; i < cryptogram.length; i++) {
    const [prev, curr, next] = [cryptogram[i - 1], cryptogram[i], cryptogram[i + 1]];
    let duplicateLetter = '';

    if (curr === next) {
      if (curr === prev) {
        duplicateLetterList[duplicateLetterList.length - 1] += curr;
      } else {
        duplicateLetterList.push((duplicateLetter += curr + next));
      }
    }
  }

  if (duplicateLetterList.length === 0) return cryptogram;

  duplicateLetterList.forEach((duplicateLetter) => {
    cryptogram = cryptogram.replace(duplicateLetter, '');
  });

  return problem2(cryptogram);
}

module.exports = problem2;
