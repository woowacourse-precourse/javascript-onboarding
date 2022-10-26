function problem2(cryptogram) {
  let count = cryptogram.length;
  let newString = cryptogram
  for(let num = 'a'.charCodeAt(0); num < 'z'.charCodeAt(0) + 1; num++){
    const regex = new RegExp(`${String.fromCharCode(num)}{2}`, 'g');
    newString = newString.replace(regex, '');
  }

  return newString;

}

module.exports = problem2;
