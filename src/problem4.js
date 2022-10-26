function problem4(word) {
  const result = word
    .replace(/[a-z]/g, (letter) =>
      String.fromCharCode(lowerFlog(letter.charCodeAt(0)))
    )
    .replace(/[A-Z]/g, (letter) =>
      String.fromCharCode(upperFlog(letter.charCodeAt(0)))
    );
  return result;
}

module.exports = problem4;
