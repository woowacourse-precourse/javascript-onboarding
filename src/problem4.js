function problem4(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let Alphabet = word.charCodeAt(i);

    result += changesAlphabet(Alphabet);
  }
  return result;
}

function changesAlphabet(Alphabet) {
  if (Alphabet >= 65 && Alphabet <= 90) {
    return String.fromCharCode(65 + 90 - Alphabet);
  }

  if (Alphabet >= 97 && Alphabet <= 122) {
    return String.fromCharCode(97 + 122 - Alphabet);
  } else {
    return String.fromCharCode(Alphabet);
  }
}

module.exports = problem4;
