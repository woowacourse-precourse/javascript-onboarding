function problem2(cryptogram) {
  if(deleteRepeate(cryptogram) === null) return ""
  return deleteRepeate(cryptogram)
}

function deleteRepeate(cryptogram) {
  let temporaryStorage = [];

  for (let i = 0; i < cryptogram.length; i++) {
    const lastEl = temporaryStorage.slice(-1)[0];
    const currEl = cryptogram[i];

    currEl === lastEl ? temporaryStorage.pop() : temporaryStorage.push(currEl);
    
  }
  return temporaryStorage.join('');
}

module.exports = problem2;