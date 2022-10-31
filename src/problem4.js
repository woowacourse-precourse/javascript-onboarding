function problem4(word) {
  const upperAlpha = getAlphabets(65);
  const lowerAlpha = getAlphabets(97);
  
  return invertWord(word, upperAlpha, lowerAlpha);
}

function invertWord(word, upperAlpha, lowerAlpha) {
  var inverted = '';
  const range = word.length;
  const alphaRange = upperAlpha.length;

  for (var idx=0; idx < range; idx++) {
    let currentChar = word.charAt(idx)
    
    if (upperAlpha.includes(currentChar)) {
      originalIdx = upperAlpha.indexOf(currentChar);
      invertedIdx = alphaRange - originalIdx -1;
      inverted += upperAlpha[invertedIdx];
    }
    else if (lowerAlpha.includes(currentChar)) {
      originalIdx = lowerAlpha.indexOf(word.charAt(idx));
      invertedIdx = alphaRange - originalIdx -1;
      inverted += lowerAlpha[invertedIdx];
    }
    else {
      inverted += currentChar;
    }
  }

  return inverted;
}

function getAlphabets(ascii) {
  const alpha = Array.from(Array(26)).map((e, idx) => idx + ascii);
  const alphabet = alpha.map((n) => String.fromCharCode(n));
  
  return alphabet;
}

module.exports = problem4;

