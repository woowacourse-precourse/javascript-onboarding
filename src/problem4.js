const asciiUpperA = 65;
const asciiUpperZ = 90;
const asciiLowerA = 97;
const asciiLowerZ = 122;
const space = 32;

function problem4(word) {
  let frogWord = '';

  for (let i = 0; i < word.length; i++) {
    const currentAscii = word.charCodeAt(i);
    let frogAscii = '';

    if (currentAscii >= 65 && currentAscii <= 90)
      frogAscii = asciiUpperZ - currentAscii + asciiUpperA;
    if (currentAscii >= 97 && currentAscii <= 122)
      frogAscii = asciiLowerZ - currentAscii + asciiLowerA;
    if (currentAscii === 32) frogAscii = space;

    frogWord += String.fromCharCode(frogAscii);
  }

  return frogWord;
}

module.exports = problem4;
