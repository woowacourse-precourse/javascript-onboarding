function problem2(cryptogram) {
  if (cryptogram.length === 0) return cryptogram;
  const decrypted = [];
  let pointer = '';
  let isContinious = false;
  [...cryptogram].forEach((character) => {
    if (!isContinious) {
      pointer = decrypted.pop() || '';
    }

    if (pointer === character) {
      console.log(pointer, character);
      isContinious = true;
    } else {
      if (!isContinious) {
        decrypted.push(pointer);
      }
      decrypted.push(character);
      isContinious = false;
    }
  });

  const decryptogram = decrypted.join('');

  if (decryptogram === cryptogram) {
    return cryptogram;
  }

  return problem2(decryptogram);
}
problem2('good'); //?
// module.exports = problem2;
