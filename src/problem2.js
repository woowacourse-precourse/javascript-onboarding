const isAlphabetLowerCase = (word) => {
  for (const element of word) {
    const charCode = element.charCodeAt(0);
    if (charCode < 97 || charCode > 122) return false;
  }
  return true;
};

const isRepeat = (word) => {
  let results = false;
  let before = '';

  for (const element of word) {
    if (element == before) {
      results = true;
      break;
    } else before = element;
  }

  return results;
};

const removeRepeated = (word) => {
  let result = [];
  let before = '';

  for (const element of word.split('')) {
    if (element === before) {
      result.pop();
      continue;
    } else {
      result.push(element);
      before = element;
    }
  }

  return result.join('');
};

function problem2(cryptogram) {
  //예외사항1
  if (cryptogram.length < 1 || cryptogram.length > 1000) return 'ERROR';
  //예외사항2
  if (!isAlphabetLowerCase(cryptogram)) return 'ERROR';

  let results = cryptogram;

  while (isRepeat(results)) {
    results = removeRepeated(results);
  }

  return results;
}

module.exports = problem2;
