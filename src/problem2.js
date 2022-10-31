function removeContinuos(word) {
  let removed_word = [],
      prev_char = '';

  for (let char of word) {
    if (char === prev_char && char === removed_word[removed_word.length - 1]) removed_word.pop();
    if (char !== prev_char) {
      removed_word.push(char); 
      prev_char = char;
    }
  }

  return removed_word.join('');
}


function decryption(cryptogram) {
  let prev_step = '';

  while (1) {
    cryptogram = removeContinuos(cryptogram);
    if (!cryptogram || (cryptogram === prev_step)) break;
    prev_step = cryptogram;
  }

  return cryptogram;
}

function problem2(cryptogram) {
  return decryption(cryptogram);
}

module.exports = problem2;
